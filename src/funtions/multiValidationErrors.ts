import { TypeLanguage } from '../constants/typeLanguage'
import {
  DataValidationArray,
  ResultValidationArray,
  DataValidationArrayErrors,
  DataValidation,
  ResultValidationArrayErros,
} from '../models/dataValidation.model'
import { singleValidation } from './singleValidation'

const { ES } = TypeLanguage

export const multiValidationErrors: (
  dataValidation: DataValidationArray,
  language?: 'EN' | 'ES'
) => ResultValidationArrayErros = (
  dataValidation: DataValidationArray,
  language: 'EN' | 'ES' = ES
): ResultValidationArrayErros => {
  let result: ResultValidationArrayErros = { status: true }

  const DATA_ERRORS: DataValidationArrayErrors = dataValidation.map(
    (data: DataValidation): ResultValidationArray => {
      return singleValidation(data, language)
    }
  )

  // Filtrar aquellos resultados que tengan errores (status: false)
  const errors: ResultValidationArray[] = DATA_ERRORS.filter(
    (data: ResultValidationArray): boolean => !data.status
  )

  if (errors.length >= 1) {
    result = { status: false, errors }
  }

  return result
}
