
import Perfil from "./Componentes/Perfil";
import Link from 'next/link';

const Home = () =>{
  return (
    <>
    <nav>
      <Link href="/Pagina1">Pagina1</Link>
    </nav>
      <p> Hola </p>
      <p> Chao </p>
      <Perfil nombre="Pablo"apellido="Marmol"edad={30}rol="docente"/>
      <Perfil  nombre="Jose"apellido="Perez" edad={15}rol="estudiante"/>

    </>
  );
}

