import { TypeLanguage } from '../constants/typeLanguage'
import {
  DataValidationArray,
  ResultValidationArray,
} from '../models/dataValidation.model'
import { singleValidation } from './singleValidation'

const { ES } = TypeLanguage

export const multiValidation: (
  dataValidation: DataValidationArray,
  language?: 'EN' | 'ES'
) => ResultValidationArray = (
  dataValidation: DataValidationArray,
  language: 'EN' | 'ES' = ES
): ResultValidationArray => {
  let result: ResultValidationArray = {
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
