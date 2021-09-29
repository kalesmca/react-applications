import React, {useState, createContext} from 'react';

export const ThemeContexts = createContext();

export default function ThemeContextProvider(props){

    const [nightMode, setNightMode] = useState(false);

    return(
        <ThemeContexts.Provider
        value={{
            nightMode, setNightMode
        }}>
            {props.children}
        </ThemeContexts.Provider>
    )

}

