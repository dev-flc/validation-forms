import { EN_MESSAGE_ERRORS } from '../constants/messages/en'
import { ES_MESSAGE_ERRORS } from '../constants/messages/es'
import { TypeLanguage } from '../constants/typeLanguage'
import {
  DataValidation,
  ResultValidation,
} from '../models/dataValidation.model'
import { isValidString, loopTypeValidations } from '../utils/utils'

const { ES } = TypeLanguage

export const singleValidation: (
  dataValidation: DataValidation,
  language?: string
) => ResultValidation = (
  dataValidation: DataValidation,
  language: string = ES
): ResultValidation => {
  const { type, id } = dataValidation
  const { ERROR_TYPE_ARRAY } =
    ES === language ? ES_MESSAGE_ERRORS : EN_MESSAGE_ERRORS

  let result: ResultValidation = {
    id,
    message: ERROR_TYPE_ARRAY,
    status: false,
  }

  if (Array.isArray(type) && type.length >= 1) {
    result = loopTypeValidations(dataValidation, language)
  } else if (typeof type === 'string' && isValidString(type)) {
    result = {
      ...result,
      status: true,
      message: 'Validacion de string',
    }
  }

  return result
}
