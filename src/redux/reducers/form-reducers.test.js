import formReducer from './formReducer'

import {
    NUMBER_CARD,
} from '../constants/constants.js';

const initialState = {
    cardNumber: '',
}

  test('reducer receiving NUMBER_CARD', () => {
    const action = { type: NUMBER_CARD, cardNumber: 1010101010101010 }
    const state = formReducer(initialState, action)
    expect(state).toEqual(
        {
            "backImage": false,
            "cardName": "",
            "cardNumber": 1010101010101010,
            "cvv": "",
            "portionQuantity": 0,
            "rotateCard": false,
            "shelfLife": "",
            "valid": false,
        }
    )
  })
