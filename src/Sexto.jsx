import { quintoStateComponent } from "./Context"
import { useContext } from 'react';

export const Sexto = () => {

    const estadoQuinto = useContext(quintoStateComponent)

    return (
        <div>
            <h1>Component sexto usando o estado do quinto através do context {estadoQuinto}</h1>
        </div>     
    )
}