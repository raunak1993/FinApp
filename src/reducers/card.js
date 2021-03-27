import { SET_CARD_DETAILS } from "../action/card";

const initialState = {
    cardNumber: '',
    cardLimit: ''
};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARD_DETAILS:
            return {
                cardNumber: action.payload.cardNum,
                cardLimit: action.payload.cardLimit

            };
        default:
            return state;
    }
};

export default cardReducer;
