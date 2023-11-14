const initialState = {
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                isAuth: true
            }
    
        default:
            return state
    }
}