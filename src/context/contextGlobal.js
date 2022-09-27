import { Context } from "./context";

export default function MainContext ({children}){
    
    return(
        <>
            <Context.Provider value={{a:1}}>
                {children}    
            </Context.Provider>    
        </>
    )
}