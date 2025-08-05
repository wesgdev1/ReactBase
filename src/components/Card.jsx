import { useNavigate } from "react-router-dom";
import style from "./Card.module.css";

export const Card = ({ name, rol, image, description }) => {
  // Hook reglas:
  // 1. No se pueden llamar dentro de condicionales, bucles o funciones anidadas.
  // 2. Se deben llamar en el nivel superior del componente.
  // 3. Se deben llamar en el mismo orden en cada renderizado del componente.
  // 4. Se deben llamar desde componentes de función, no desde funciones normales.

  const navigate = useNavigate();

  const handleClick = () => {
    console.log(`Soy el evento click en la tarjeta de ${name}`);
  };

  const handleClickNavigation = () => {
    navigate("/");
  };

  const handleClickDetail = () => {
    navigate(`/estudiante/${name}`);
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
  };

  return (
    <div className={style.container}>
      <img src={image} alt="photo" className={style.image} />

      <h2>{name}</h2>
      <strong>Rol: {rol}</strong>
      <p>{description}</p>
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={handleClickNavigation}>
        ir a informacion del bootcamp
      </button>

      <button onClick={handleClickDetail}>Ver detalle del estudiante</button>
      <hr />
      <input
        type="text"
        placeholder="Escribe tu nombre"
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Escribe tu edad"
        name="age"
        onChange={handleChange}
      />
    </div>
  );
};
