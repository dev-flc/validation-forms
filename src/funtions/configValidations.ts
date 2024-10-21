import { TypeValidation } from '../constants/typeValidation'
import {
  DataValidation,
  ResultValidation,
} from '../models/dataValidation.model'
import { isRequired } from './validationAlls'

interface ValidationFunction {
  func: (dataValidation: DataValidation, language: string) => ResultValidation
}

export const configValidations: {
  [key in TypeValidation]?: ValidationFunction
} = {
  [TypeValidation.R]: {
    func: isRequired,
  },
}
