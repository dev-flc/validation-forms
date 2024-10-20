import { ES_MESSAGE_ERRORS } from '../constants/messages/es'
import { TypeLanguage } from '../constants/typeLanguage'
import {
  DataValidation,
  ResultValidation,
} from '../models/dataValidation.model'
import { isValidString } from '../utils/utils'

const { ES } = TypeLanguage

export const singleValidation: (
  validation: DataValidation,
  value: string
) => ResultValidation = (
  validation: DataValidation,
  language: string = ES
): ResultValidation => {
  const { type, id } = validation
  const { ERROR_TYPE_ARRAY } =
    ES === language ? ES_MESSAGE_ERRORS : ES_MESSAGE_ERRORS

  let result: ResultValidation = {
    id,
    type,
    message: ERROR_TYPE_ARRAY,
    status: false,
  }

  if (Array.isArray(type) && type.length > 1) {
    result = {
      ...result,
      status: true,
      message: 'Validacion de array',
    }
  } else if (typeof type === 'string' && isValidString(type)) {
    result = {
      ...result,
      status: true,
      message: 'Validacion de string',
    }
  }

  return result
}
