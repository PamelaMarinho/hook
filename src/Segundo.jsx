import { Terceiro } from "./Terceiro"

export const Segundo = (primeiroProps) => {

    return (
        <div>
            <Terceiro segundoProps={primeiroProps.props}/>
        </div>
    )
}