import { useContext } from "react"
import { primeiroStateComponent } from "./Context" 

export const Quarto = () => {

    const primeiroCont = useContext(primeiroStateComponent)

    return (
        <div>
            <h1>{`quarto component usando context ${primeiroCont} `}</h1>
        </div>
    )
}