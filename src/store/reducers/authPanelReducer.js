const initialState = {
    isPanelDisplayed: false
}

export const authPanelReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_AUTH_DISPLAY':
            return {...state, isPanelDisplayed: !state.isPanelDisplayed
            }
        default:
            return state
    }
}