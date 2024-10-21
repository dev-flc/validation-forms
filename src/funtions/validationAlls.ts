import {
  DataValidation,
  ResultValidation,
} from '../models/dataValidation.model'
import { getResul, isValidString } from '../utils/utils'

export const isRequired: (
  dataValidation: DataValidation,
  language: string
) => ResultValidation = (
  dataValidation: DataValidation,
  language: string
): ResultValidation => {
  if (!isValidString(dataValidation.value)) {
    return getResul(dataValidation, language)
  }
  return {
    id: dataValidation.id,
    status: true,
  }
}
