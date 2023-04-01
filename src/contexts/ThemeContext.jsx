import { createContext, useContext, useReducer } from "react";

export const ThemeContext = createContext()


const INITIAL_THEME_STATE = {
    colorTheme: '#f5f5dc'
}



const themeReducer = (state, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return {
                colorTheme: action.payload
            }
        default:
            return state;
    }
}


export const ThemeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_THEME_STATE)
    return (
        <ThemeContext.Provider 
        value={{
            colorTheme: state.colorTheme,
            dispatch
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext)
}