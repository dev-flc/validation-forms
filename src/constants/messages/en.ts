import { TypeValidation } from '../typeValidation'
import { isValidString } from './../../utils/utils'

export enum EN_MESSAGE_ERRORS {
  ERROR_TYPE_ARRAY = 'The value of type is not an array or a string.',
  ERROR_TYPE_OBJECT = 'Invalid property, a property of type object is expected.',
  ERROR_TYPE_LANGUAGE = 'The language property is invalid, please enter only "EN" or "ES".',
  ERROR_TYPE_VALIDATION = 'Validation type does not exist :(',
  ERROR_EXPRESSION = 'undefined regular expression :(',
  ERROR_ID_UNDEFINED = 'undefined id :(',
}

const GET_MESSAGE: () => {
  [key: string]: (title?: string) => string
} = (): { [key: string]: (title?: string) => string } => ({
  [TypeValidation.T]: (title?: string): string =>
    isValidString(title)
      ? `The data ${title} is not valid, please enter only letters.`
      : `The data is not valid, please enter only letters.`,

  [TypeValidation.R]: (title?: string): string =>
    isValidString(title)
      ? `The data ${title}, is required.`
      : `The data is required.`,

  [TypeValidation.N]: (title?: string): string =>
    isValidString(title)
      ? `The data ${title} is not valid, please enter only numbers.`
      : `The data is not valid, please enter only numbers.`,

  [TypeValidation.TN]: (title?: string): string =>
    isValidString(title)
      ? `The data ${title} is not valid, please enter only letters and numbers.`
      : `The data is not valid, please enter only letters and numbers.`,

  [TypeValidation.C]: (title?: string): string =>
    isValidString(title)
      ? `The data ${title}, is required.`
      : `The data is required.`,
})

const messageDefault: (title?: string) => string = (title?: string): string =>
  isValidString(title)
    ? `The data ${title}, is not valid.`
    : `The data is not valid.`

export const GET_EN_MESSAGE: (type: string, title?: string) => string = (
  type: string,
  title?: string
): string => {
  let message: string = messageDefault(title)
  const messages: { [key: string]: (title?: string) => string } = GET_MESSAGE()
  if (Object.prototype.hasOwnProperty.call(messages, type)) {
    message = messages[type](title)
  }
  return message
}
