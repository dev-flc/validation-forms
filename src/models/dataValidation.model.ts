import { TypeValidation } from '../constants/typeValidation'

export interface DataValidation {
  id: string // Identificador único
  title?: string // Título del campo
  type: TypeValidation | TypeValidation[] | string | string[] // Array de tipos (por ejemplo, "R", "T")
  value: string // Valor del campo
  message?: string // Mensaje opcional para el tipo "R"
}

export interface ResultValidation {
  id: string
  message?: string
  status: boolean
}

export type ArrayResultValidation = Omit<ResultValidation, 'id'> & {
  id?: string
}

export type DataValidationArray = DataValidation[]
