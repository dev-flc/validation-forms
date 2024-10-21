import { GET_ES_MESSAGE, ES_MESSAGE_ERRORS } from '../constants/messages/es'
import { TypeLanguage } from '../constants/typeLanguage'
import {
  DataValidation,
  ResultValidation,
} from '../models/dataValidation.model'
import { configValidations } from '../funtions/configValidations'
import { TypeValidation } from '../constants/typeValidation'
import { GET_EN_MESSAGE } from '../constants/messages/en'

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

  result.message = GET_MESSAGES(dataValidation, language)

  return result
}

export const GET_MESSAGES: (
  dataValidation: DataValidation,
  language: string
) => string = (dataValidation: DataValidation, language: string): string => {
  const { type, title, message } = dataValidation
  let new_message: string = ''

  if (!isValidString(message)) {
    if (language === TypeLanguage.ES) {
      if (typeof type === 'string' && isValidString(type)) {
        new_message = GET_ES_MESSAGE(type, title)
      }
    } else if (language === TypeLanguage.EN) {
      if (typeof type === 'string' && isValidString(type)) {
        new_message = GET_EN_MESSAGE(type, title)
      }
    } else {
      new_message = ES_MESSAGE_ERRORS.ERROR_TYPE_LANGUAGE
    }
  } else {
    if (typeof message === 'string') {
      new_message = message
    }
  }
  return new_message
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
