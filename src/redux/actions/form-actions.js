import { 
    NUMBER_CARD,
} from '../constants/constants.js';

export const updateCardNumber = (value) => { return { type: NUMBER_CARD, cardNumber: value }};

