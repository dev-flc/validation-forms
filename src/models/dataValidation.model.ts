export interface DataValidation {
  id: string // Identificador único
  title?: string // Título del campo
  type: string | string[] // Array de tipos (por ejemplo, "R", "T")
  value: string // Valor del campo
  message?: string // Mensaje opcional para el tipo "R"
}

export interface ResultValidation
  extends Omit<DataValidation, 'title' | 'value' | 'type'> {
  status: boolean // Estado de la validación
}
