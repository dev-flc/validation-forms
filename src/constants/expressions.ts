import { TypeValidation } from './typeValidation'

export const EXPRESSIONS: {
  [key in TypeValidation]?: RegExp | { [key in TypeValidation]?: RegExp }
} = {
  [TypeValidation.T]: /^([a-zA-Z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ .,]{0,100})$/,

  [TypeValidation.N]: /^([0-9])*$/,

  [TypeValidation.ND]: /^([0-9 .])*$/,

  [TypeValidation.TN]: /^[a-z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ A-Z0-9 .,]*$/,

  [TypeValidation.TN_OMIT_ACCENTS]: /^[a-zA-Z0-9]*$/,

  [TypeValidation.CURP]:
    /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,

  [TypeValidation.DATE]:
    /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/,

  [TypeValidation.EMAIL]:
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,

  [TypeValidation.RFC]:
    /^([a-zñA-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01]))$/,

  [TypeValidation.RFC_KEY_CODE]:
    /^([a-zñA-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([a-zA-Z\d]{2})([A-ZÑa-zñ\d])$/,

  [TypeValidation.POSTAL_CODE]: /(^([0-9]{5,5})|^)$/,

  [TypeValidation.PSWD]: {
    [TypeValidation.PSWD_LOWERCASE]: /(?=.*?[a-z])/,
    [TypeValidation.PSWD_UPPERCASE]: /(?=.*?[A-Z])/,
    [TypeValidation.PSWD_DIGIT]: /(?=.*?[0-9])/,
    [TypeValidation.PSWD_SPECIAL_CHARACTER]: /(?=.*?[$@$!%*?&])/,
    [TypeValidation.PSWD_MIN]: /.{8,}/,
    [TypeValidation.PSWD_MAX]: /^.{8,15}$/,
    [TypeValidation.PSWD_BLANK_SPACE]: /\s/,
  },

  [TypeValidation.SPECIAL_CHARACTER]:
    /^([a-z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ A-Z0-9 ‘,\-:;\\#/¿()´¨&"_*.%¿?$¡!@+¨]*$)|(\n[a-z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ A-Z0-9 ‘,\-:;\\#/()´¨&"_*.%¿?$¡!@+¨]{1,}$)/,
}
