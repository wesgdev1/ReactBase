import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export const NabVar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};
