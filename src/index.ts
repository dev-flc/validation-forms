import { singleValidation } from './funtions/singleValidation'
import { DataValidation } from './models/dataValidation.model'

const dataUNO: DataValidation = {
  id: 'soy el id 1',
  title: 'Title 1',
  type: ['R'],
  value: '2',
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
console.log(singleValidation(dataUNO))
console.log(singleValidation(dataDOS))
console.log(singleValidation(dataTRES))
