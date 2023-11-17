const initialState = {
    user:null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'LOG_OUT' :
            return {
                ...state,
                user:null
            }
    
        default:
            return state
    }
}