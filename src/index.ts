import { singleValidation } from './funtions/singleValidation'
import { DataValidation } from './models/dataValidation.model'

const dataUNO: DataValidation = {
  id: '1',
  title: 'Title',
  type: ['R', 'T'],
  value: 'Value',
  message: 'Message',
}

const dataDOS: DataValidation = {
  id: '1',
  title: 'Title',
  type: 'T',
  value: 'Value',
  message: 'Message',
}

const dataTRES: DataValidation = {
  id: '1',
  title: 'Title',
  type: [],
  value: 'Value',
  message: 'Message',
}
console.log('==>', singleValidation(dataUNO, 'UNO'))
console.log('==>', singleValidation(dataDOS, 'DOS'))
console.log('==>', singleValidation(dataTRES, 'TRES'))
