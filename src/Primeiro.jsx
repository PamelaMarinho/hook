import { useEffect, useState, createContext } from "react"
import {Segundo} from './Segundo'
import { Quarto } from "./Quarto";

export const userContext = createContext()

export const Primeiro = () => {
    const [estado, setEstado] = useState(0)

    useEffect(()=>{
        console.log("dom")
    })

    return (
        <div>
            <Segundo props={estado}/>

            <userContext.Provider value={estado}>
                <Quarto></Quarto>
            </userContext.Provider>

            <button onClick={()=>setEstado(previou=>previou + 1)}>increase</button>
            <button onClick={()=>setEstado(previou=>previou - 1)}>decrease</button>
        </div>
    )
}