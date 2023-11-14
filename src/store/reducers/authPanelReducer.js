const initialState = {
    isPanelDisplayed: false,
    formDisplayed: 'registration'
}

export const authPanelReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_AUTH_DISPLAY':
            return {...state, isPanelDisplayed: !state.isPanelDisplayed
            }
        case 'SHOW_LOGIN_FORM':
            return {...state, formDisplayed: 'login'
            }
        case 'SHOW_REGISTRATION_FORM':
            return {...state, formDisplayed: 'registration'
            }
        default:
            return state
    }
}