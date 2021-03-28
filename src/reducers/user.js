import { LOGIN, SIGN_UP } from "../action/auth";

const initialState = {
    userName: '',
    password: '',
    isLoggedIn: false

};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                userName: action.payload.name,
                password: action.payload.password,
                isLoggedIn: true
            };
        case LOGIN:
            return {
                userName: action.payload.name,
                password: action.payload.password,
                isLoggedIn: true
            }
        default:
            return state;
    }
};

export default userReducer;
