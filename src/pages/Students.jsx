import style from "../App.module.css";
import { Card } from "../components/Card";

export const Students = ({ students }) => {
  return (
    <>
      <h1 className={style.title}>Lista de estudiantes</h1>
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
