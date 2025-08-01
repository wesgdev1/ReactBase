import style from "./Card.module.css";

export const Card = ({ name, rol, image, description }) => {
  return (
    <div className={style.container}>
      <img src={image} alt="photo" className={style.image} />

      <h2>{name}</h2>
      <strong>Rol: {rol}</strong>
      <p>{description}</p>
    </div>
  );
};
