const initialState = {
    isAuth: false,
    user:{}
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload.payload,
                isAuth: true
            }
        case 'LOG_OUT' :
            return {
                ...state,
                user:{},
                isAuth: false
            }
    
        default:
            return state
    }
}