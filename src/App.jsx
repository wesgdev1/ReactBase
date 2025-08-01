import { Card } from "./components/Card";

import style from "./App.module.css";

function App() {
  const students = [
    {
      name: "Welinton suarez",
      rol: "Estudiante",
      image: "https://i.pravatar.cc/100",
      description: "Me gusta el Frontend",
    },
    {
      name: "Jhonatan Acevedo",
      rol: "Estudiante",
      image: "https://i.pravatar.cc/100",
      description: "Me gusta el Backend",
    },
    {
      name: "Luisa Hernadez",
      rol: "Estudiante",
      image: "https://i.pravatar.cc/100",
      description: "Me gusta el Diseño",
    },
  ];

  return (
    <>
      <h1 className={style.title}>Lista de estudiantes</h1>
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
}

export default App;
