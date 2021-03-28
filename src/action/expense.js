export const ADD_EXPENSE = 'ADD_EXPENSE'

export const addExpense = (id, label, amount, date) => {
    return {
        type: ADD_EXPENSE,
        payload: {
            id, label, amount, date
        }
    }
}