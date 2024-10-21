import { isValidString } from './../../utils/utils'

export enum ES_MESSAGE_ERRORS {
  ERROR_TYPE_ARRAY = 'El valor de type no es un array o un string.',
  ERROR_TYPE_OBJECT = 'Propiedad invalida, se espera una propiedad de tipo objeto.',
  ERROR_TYPE_LANGUAGE = 'La propiedad de idioma no es válida, ingrese solo "EN" o "ES".',
  ERROR_TYPE_VALIDATION = 'El tipo de validacion no existe :(',
  ERROR_EXPRESSION = 'expresión regular indefinida :(',
  ERROR_ID_UNDEFINED = 'id indefinido :(',
}

export const GET_MESSAGE: () => {
  [key: string]: (title?: string) => string
} = (): { [key: string]: (title?: string) => string } => ({
  ['T']: (title?: string): string =>
    isValidString(title)
      ? `El dato ${title} no es válido, ingresa sólo letras.`
      : `El dato no es válido, ingresa sólo letras.`,

  ['R']: (title?: string): string =>
    isValidString(title)
      ? `El dato ${title}, es requerido.`
      : `El dato es requerido.`,
})

const messageDefault: (title?: string) => string = (title?: string): string =>
  isValidString(title)
    ? `El dato ${title}, no es válido.`
    : `El dato no es válido.`

export const ES_MESSAGE: (type: string, title?: string) => string = (
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
