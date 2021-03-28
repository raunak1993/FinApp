const initialState = {
    expenses: [{
        id: '1',
        label: 'Netflix',
        amount: '$10',
        date: '10/12/2020'
    },
    {
        id: '2',
        label: 'Alliance',
        amount: '$5',
        date: '15/02/2021'
    },
    {
        id: '3',
        label: 'Disney',
        amount: '$120',
        date: '16/03/2021'
    }
    ],
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
