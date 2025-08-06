import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <Link to="/">Inicio</Link>
        <Link to="/estudiantes">Estudiantes</Link>
        <Link to="/miperfil">Mi Perfil</Link>

        <Link to="/tareas">Ver tareas</Link>
      </nav>
    </div>
  );
};
