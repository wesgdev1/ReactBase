import style from "./Card.module.css";

export const Card = ({ name, rol, image, description }) => {
  return (
    <div className={style.container}>
      <img src={image} alt="photo" />
      <h2>{name}</h2>
      <strong>{rol}</strong>
      <p>{description}</p>
    </div>
  );
};
