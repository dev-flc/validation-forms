import { TypeValidation } from '../typeValidation'
import { isValidString } from './../../utils/utils'

export enum ES_MESSAGE_ERRORS {
  ERROR_TYPE_ARRAY = 'El valor de type no es un array o un string.',
  ERROR_TYPE_OBJECT = 'Propiedad invalida, se espera una propiedad de tipo objeto.',
  ERROR_TYPE_LANGUAGE = 'La propiedad de idioma no es válida, ingrese solo "EN" o "ES".',
  ERROR_TYPE_VALIDATION = 'El tipo de validacion no existe :(',
  ERROR_EXPRESSION = 'expresión regular indefinida :(',
  ERROR_ID_UNDEFINED = 'id indefinido :(',
}

const get_message: () => {
  [key: string]: (title?: string) => string
} = (): { [key: string]: (title?: string) => string } => ({
  [TypeValidation.T]: (title?: string): string =>
    isValidString(title)
      ? `El dato ${title} no es válido, ingresa sólo letras.`
      : `El dato no es válido, ingresa sólo letras.`,

  [TypeValidation.R]: (title?: string): string =>
    isValidString(title)
      ? `El dato ${title}, es requerido.`
      : `El dato es requerido.`,

  [TypeValidation.N]: (title?: string): string =>
    isValidString(title)
      ? `El dato ${title} no es válido, ingresa sólo números.`
      : `El dato no es válido, ingresa sólo números.`,

  [TypeValidation.TN]: (title?: string): string =>
    isValidString(title)
      ? `El dato ${title} no es válido, ingresa sólo letras y números.`
      : `El dato no es válido, ingresa sólo letras y números.`,

  [TypeValidation.C]: (title?: string): string =>
    isValidString(title)
      ? `El dato ${title}, es requerido.`
      : `El dato es requerido.`,
})

const messageDefault: (title?: string) => string = (title?: string): string =>
  isValidString(title)
    ? `El dato ${title}, no es válido.`
    : `El dato no es válido.`

export const getEsMessage: (type: string, title?: string) => string = (
  type: string,
  title?: string
): string => {
  let message: string = messageDefault(title)
  const messages: { [key: string]: (title?: string) => string } = get_message()
  if (Object.prototype.hasOwnProperty.call(messages, type)) {
    message = messages[type](title)
  }
  return message
}
