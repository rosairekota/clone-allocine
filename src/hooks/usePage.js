import { useState } from "react"

export const usePage = (defaultValue) => {
    const [state, setState] = useState(defaultValue);
    
    const mutateState=(value)=>{
        setState(value)
    }  
return [state,mutateState]
}