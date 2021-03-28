export const LOGIN = 'LOGIN'
export const SIGN_UP = 'SIGN_UP'

export const login = (name, password) => {
    return {
        type: LOGIN,
        payload: {
            name, password
        }
    }
}

export const signup = (name, password) => {
    return {
        type: SIGN_UP,
        payload: {
            name, password
        }
    }
}