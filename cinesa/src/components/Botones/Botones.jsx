import "./botones.css"   // por que no funciona con modules?
import className from "classnames"

export default function Botones({
    contenido,
    normalFondoAzul,
    normalFondoBlanco,
    esquinaFondoNegro,
    esquinaFondoAzul,
    iconoDireccion,
    guardarFavoritos,
}) {

    const clases = className("", {
        "normalFondoAzul": normalFondoAzul,
        "normalFondoBlanco": normalFondoBlanco,
        "esquinaFondoNegro": esquinaFondoNegro,
        "esquinaFondoAzul": esquinaFondoAzul,
        "iconoDireccion": iconoDireccion,
        "guardarFavoritos": guardarFavoritos,
    })

    return (
        <div>
            <button className={clases} > {contenido} </button>

        </div>
    )
}


// puedo usar prop-types para restringir tipos, 1 solo true
