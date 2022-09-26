import { useEffect, useState } from "react"
import {Segundo} from './Segundo'
import { Quarto } from "./Quarto";
import { primeiroStateComponent } from "./Context";

export const Primeiro = () => {
    const [estado, setEstado] = useState(0)

    useEffect(()=>{
        console.log("dom")
    })

    return (
        <div>
            <Segundo props={estado}/>

            <primeiroStateComponent.Provider value={estado}>
                <Quarto></Quarto>
            </primeiroStateComponent.Provider>

            <button onClick={()=>setEstado(previou=>previou + 1)}>increase</button>
            <button onClick={()=>setEstado(previou=>previou - 1)}>decrease</button>
        </div>
    )
}