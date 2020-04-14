
import { 
    NUMBER_CARD,
} from '../constants/constants.js'

const INITIAL_STATE = {
    cardNumber: '',
}

const formReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case NUMBER_CARD:
            return  { ...state, cardNumber: action.cardNumber };

        default:
            return state
    }
}

export default formReducer;