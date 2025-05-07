const initState = {
    themeId: 1,
}

type InitialStateType = typeof initState

export const themeReducer = (state = initState, action: ThemeActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_THEME_ID':
                return {...state, themeId: action.themeId }
        default:
            return state
    }
}

type ThemeActionsType = {
    type: 'SET_THEME_ID'
    themeId: number
}


export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', themeId: id }) as const

