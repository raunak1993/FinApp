const initialState = {
    expenses: [],
};

const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_EXPENSE:
        //     return {
        //         ...state,
        //     };
        default:
            return state;
    }
};

export default expenseReducer;
