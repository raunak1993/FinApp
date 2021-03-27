import { SET_CARD_DETAILS } from "../action/card";

const initialState = {
    cardNumber: '',
    cardLimit: '',
    expiryDate: ''
};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARD_DETAILS:
            return {
                cardNumber: action.payload.cardNum,
                cardLimit: action.payload.cardLimit,
                expiryDate: action.payload.expiryDate
            };
        default:
            return state;
    }
};

export default cardReducer;
