const initialState = {
    games:[],
    gamesListLength: 0
}

export const gamesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_GAMES':
            const {games, gamesListLength} = action.payload
            return {...state, games, gamesListLength}
        default :
            return state
    }
}
