import { Context } from "./context";

export default function MainContext ({children}){
    
    return(
        <>
            <Context.Provider>
                {children}    
            </Context.Provider>    
        </>
    )
}