import { multiValidation } from './funtions/multiValidation'
import { singleValidation } from './funtions/singleValidation'
import { DataValidation } from './models/dataValidation.model'

const dataUNO: DataValidation = {
  id: 'soy el id 1',
  title: 'Title 1',
  type: ['R'],
  value: '',
}

const dataDOS: DataValidation = {
  id: 'soy el id 2',
  title: 'Title 2',
  type: ['R'],
  value: '',
  message: 'costom message',
}

const dataTRES: DataValidation = {
  id: 'soy el id 3',
  title: 'Title 3',
  type: [],
  value: 'Value',
  message: 'Message',
}
console.log('########## S I N G L E - V A L I D A T I O N ###########')

console.log(singleValidation(dataUNO))
console.log(singleValidation(dataDOS, 'EN'))
console.log(singleValidation(dataTRES, 'EN'))
console.log('########## M U L T I - V A L I D A T I O N ###########')
console.log(multiValidation([dataUNO, dataDOS, dataTRES]))
