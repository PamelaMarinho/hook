import { useContext } from "react"
import { userContext } from "./Primeiro"

export const Quarto = () => {

    const primeiroCont = useContext(userContext)

    return (
        <div>
            <h1>{`quarto component usando context ${primeiroCont} `}</h1>
        </div>
    )
}