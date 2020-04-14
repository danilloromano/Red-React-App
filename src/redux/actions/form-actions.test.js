import { 
    updateCardNumber,  
} from './form-actions.js'

import { 
    NUMBER_CARD,
} from '../constants/constants.js';

test('Action: updateCardNumber', () => {
  let number = updateCardNumber(1010101010101010)
  expect(number).toEqual({
    type: NUMBER_CARD,
    cardNumber  : 1010101010101010
  })
})
