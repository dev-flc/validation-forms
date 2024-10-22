import { multiValidation } from './funtions/multiValidation'
import { multiValidationErrors } from './funtions/multiValidationErrors'
import { singleValidation } from './funtions/singleValidation'
import { DataValidation } from './models/dataValidation.model'

const data: DataValidation[] = [
  {
    id: 'soy el id 1',
    title: 'Title 1',
    type: ['R'],
    value: '1',
  },
  {
    id: 'soy el id 2',
    title: 'Title 2',
    type: ['R'],
    value: '2',
    message: 'costom message',
  },
  {
    id: 'soy el id 3',
    title: 'Title 3',
    type: ['R'],
    value: 'Value',
  },
]

const dataErros: DataValidation[] = [
  {
    id: 'soy el id 1',
    title: 'Title 1',
    type: ['R'],
    value: '',
  },
  {
    id: 'soy el id 2',
    title: 'Title 2',
    type: ['R'],
    value: '',
    message: 'costom message',
  },
  {
    id: 'soy el id 3',
    title: 'Title 3',
    type: ['R'],
    value: '',
  },
  {
    id: 'soy el id 4',
    title: 'Title 4',
    type: [],
    value: '',
    message: 'Message',
  },
]
console.log('********************************************************')
console.log('********************************************************')
console.log('********************************************************')
console.log('################ S U C E S S F U L L ###################')
console.log('********************************************************')
console.log('********************************************************')
console.log('********************************************************')

console.log('########## S I N G L E - V A L I D A T I O N ###########')
console.log(singleValidation(data[0]))
console.log(singleValidation(data[1]))
console.log(singleValidation(data[2], 'EN'))

console.log('########## M U L T I - V A L I D A T I O N ###########')
console.log(multiValidation(data))

console.log('########## M U L T I - V A L I D A T I O N ###########')
console.log(multiValidationErrors(data))

console.log('========================================================')
console.log('========================================================')
console.log('========================================================')
console.log('=================== E R R O R S ========================')
console.log('========================================================')
console.log('========================================================')
console.log('========================================================')

console.log('=========== S I N G L E - V A L I D A T I O N ==========')
console.log(singleValidation(dataErros[0]))
console.log(singleValidation(dataErros[1]))
console.log(singleValidation(dataErros[2], 'EN'))

console.log('=========== M U L T I - V A L I D A T I O N ============')
console.log(multiValidation(dataErros))

console.log(
  '=========== M U L T I - V A L I D A T I O N - E R R O S ============'
)
console.log(multiValidationErrors(dataErros, 'ES'))

console.log(
  '=========== M U L T I - V A L I D A T I O N - E R R O S ============'
)
console.log(multiValidationErrors(data, 'EN'))
