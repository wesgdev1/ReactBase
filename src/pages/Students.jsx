import { useEffect, useState } from "react";
import style from "../App.module.css";
import { Card } from "../components/Card";

export const Students = ({ students }) => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  // actualizar la hora con setInterval

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    //Limpieza del efecto en el componente
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1 className={style.title}>Lista de estudiantes</h1>
      <p>Hora actual: {hora}</p>
      <hr />
      <section className={style.container}>
        {students.map((student, i) => {
          return (
            <Card
              key={i}
              name={student.name}
              rol={student.rol}
              image={student.image}
              description={student.description}
            />
          );
        })}
      </section>
    </>
  );
};
