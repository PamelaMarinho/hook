import { quintoStateComponent } from "./Context"
import { useState } from 'react';
import {Sexto} from './Sexto'

export const Quinto = () => {

    const [estadoQuinto, setEstadoQuinto] = useState(100)

    return (
        <div>
            <quintoStateComponent.Provider value={estadoQuinto}>
               <Sexto/>
            </quintoStateComponent.Provider> 
            <button onClick={()=>setEstadoQuinto(previou=>previou+1)}>quinto btn</button>
        </div>
    )
}