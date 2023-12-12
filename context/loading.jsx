import { createContext, useContext, useState } from "react";

export const LoadingContext = createContext();

export const LoadingProvider = (props) =>{
    const [isLoading, setIsLoading] = useState(true)
    return (
        <LoadingContext.Provider value={{isLoading, setIsLoading}}>
            {props.children}
        </LoadingContext.Provider>
    )
}