import { ADD_EXPENSE } from "../action/expense";

const initialState = {
    expenses: [],
    total_amount: 0
};

const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            let amount = parseInt(action.payload.amount.substring(1))
            return {
                expenses: [...state.expenses, { ...action.payload }],
                total_amount: state.total_amount + amount
            };
        default:
            return state;
    }
};

export default expenseReducer;
