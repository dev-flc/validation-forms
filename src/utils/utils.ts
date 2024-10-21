import { ES_MESSAGE, ES_MESSAGE_ERRORS } from '../constants/messages/es'
import { TypeLanguage } from '../constants/typeLanguage'
import {
  DataValidation,
  ResultValidation,
} from '../models/dataValidation.model'
import { configValidations } from '../funtions/configValidations'
import { TypeValidation } from '../constants/typeValidation'

const { ES } = TypeLanguage

export const isValidString: (value: string | null | undefined) => boolean = (
  value: string | null | undefined
): boolean => {
  return !(value === null || value === '' || value === undefined)
}

export const getResul: (
  dataValidation: DataValidation,
  language: string
) => ResultValidation = (
  dataValidation: DataValidation,
  language: string
): ResultValidation => {
  const { message, id } = dataValidation

  const result: ResultValidation = {
    id,
    message,
    status: false,
  }

  if (!isValidString(message)) {
    result.message = GET_MESSAGES(dataValidation, language)
  }

  return result
}

export const GET_MESSAGES: (
  dataValidation: DataValidation,
  language: string
) => string = (dataValidation: DataValidation, language: string): string => {
  const { type, title } = dataValidation
  if (language === TypeLanguage.ES) {
    if (typeof type === 'string' && isValidString(type)) {
      return ES_MESSAGE(type, title)
    }
  } else if (language === TypeLanguage.EN) {
    return 'PENDIENTE EN'
  }
  // PENDIENTE LANGUAGE EN
  return ES_MESSAGE_ERRORS.ERROR_TYPE_LANGUAGE
}

export const VALIDATIONS_CONFIG: (
  dataValidation: DataValidation,
  language: string
) => ResultValidation = (
  dataValidation: DataValidation,
  language: string
): ResultValidation => {
  const { type, id } = dataValidation

  const { ERROR_TYPE_VALIDATION, ERROR_ID_UNDEFINED } =
    ES === language ? ES_MESSAGE_ERRORS : ES_MESSAGE_ERRORS

  const message: string = id ? ERROR_TYPE_VALIDATION : ERROR_ID_UNDEFINED

  const result: ResultValidation = {
    id,
    message,
    status: false,
  }

  let func:
    | ((dataValidation: DataValidation, language: string) => ResultValidation)
    | undefined

  // Verificar si `type` es una clave válida y tiene una función de validación
  if (id && configValidations[type as keyof typeof TypeValidation]) {
    // Asignar el tipo explícito a `validationConfig`
    const validationConfig:
      | {
          func: (
            dataValidation: DataValidation,
            language: string
          ) => ResultValidation
        }
      | undefined = configValidations[type as keyof typeof TypeValidation]

    if (validationConfig) {
      func = validationConfig.func // Guardar la función en `func`
    }
  }

  if (func) {
    return func(dataValidation, language)
  }

  return result
}

export const LOOP_TYPE_VALIDATIONS: (
  dataValidation: DataValidation,
  language: string
) => ResultValidation = (
  dataValidation: DataValidation,
  language: string
): ResultValidation => {
  const { type, id } = dataValidation

  let result: ResultValidation = {
    id,
    message: '',
    status: false,
  }

  for (const NEW_TYPE of type) {
    result = VALIDATIONS_CONFIG({ ...dataValidation, type: NEW_TYPE }, language)
    if (result.status === false) {
      break
    }
  }

  return result
}
