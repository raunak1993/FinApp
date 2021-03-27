const initialState = {
    userName: '',
};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_CARD_DETAILS:
        //     return {
        //         ...state,
        //     };
        default:
            return state;
    }
};

export default cardReducer;
