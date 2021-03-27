export const SET_CARD_DETAILS = 'SET_CARD_DETAILS'

export const setCardDetails = (cardNum, cardLimit, expiryDate) => {
    return {
        type: SET_CARD_DETAILS,
        payload: {
            cardNum,
            cardLimit,
            expiryDate
        }
    }
}