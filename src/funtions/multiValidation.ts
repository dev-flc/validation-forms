import { TypeLanguage } from '../constants/typeLanguage'
import {
  DataValidationArray,
  ArrayResultValidation,
} from '../models/dataValidation.model'
import { singleValidation } from './singleValidation'

const { ES } = TypeLanguage

export const multiValidation: (
  dataValidation: DataValidationArray,
  language?: string
) => ArrayResultValidation = (
  dataValidation: DataValidationArray,
  language: string = ES
): ArrayResultValidation => {
  let result: ArrayResultValidation = {
    status: true,
  }
  for (const NEW_DATA of dataValidation) {
    result = singleValidation(NEW_DATA, language)
    if (result.status === false) {
      break
    }
  }
  return result
}
