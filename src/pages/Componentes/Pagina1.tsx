import React,{useState} from "react";
//import form from "react-bootstrap/form"
//import (form) from "react-bootstrap"
import Link from 'next/link';

export const Pagina1 = () => {
const [nombre, setNombre] = useState("")
    return (
<>
<form>
    <input type="text" name="nombre"/>
    <input type="text"  name="apellido"/>
    <button>Registrar</button>

</form>

<p>Hola mundo desde pagina 1</p>
</>
    )
}

export default Pagina1