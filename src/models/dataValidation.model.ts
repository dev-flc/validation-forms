export interface DataValidation {
  id: string // Identificador único
  title?: string // Título del campo
  type: string | string[] // Array de tipos (por ejemplo, "R", "T")
  value: string | number // Valor del campo
  message?: string // Mensaje opcional para el tipo "R"
}
/*
export interface ResultValidation {
  id: string // Identificador único
  title?: string // Título del campo
  type: string | string[] // Array de tipos (por ejemplo, "R", "T")
  message: string // Mensaje opcional para el tipo "R"
  status: boolean // Estado de la validación
}*/

export interface ResultValidation
  extends Omit<DataValidation, 'title' | 'value'> {
  message: string // Mensaje
  status: boolean // Estado de la validación
}
