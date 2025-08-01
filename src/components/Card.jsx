import style from "./Card.module.css";

export const Card = ({ name, rol, image }) => {
  return (
    <div className={style.container}>
      <img src={image} alt="photo" />
      <h2>{name}</h2>
      <strong>{rol}</strong>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam eveniet
        et, optio nesciunt doloribus praesentium quos assumenda odio illo nisi
        excepturi tempora omnis ipsam non laboriosam ducimus, quasi qui
        deleniti!
      </p>
    </div>
  );
};
