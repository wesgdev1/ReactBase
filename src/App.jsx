import { Card } from "./components/Card";

import { NabVar } from "./components/NabVar";
import { BrowserRouter, Routes } from "react-router-dom";
import { Students } from "./pages/Students";

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

    {
      name: "Carlos Perez",
      rol: "Estudiante",
      image: "https://i.pravatar.cc/100",
      description: "Me gusta la Inteligencia Artificial",
    },
    {
      name: "Ana Torres",
      rol: "Estudiante",
      image: "https://i.pravatar.cc/100",
      description: "Me gusta el Desarrollo Móvil",
    },
    {
      name: "Miguel Gomez",
      rol: "Estudiante",
      image: "https://i.pravatar.cc/100",
      description: "Me gusta la Seguridad Informática",
    },
    {
      name: "Sofia Ramirez",
      rol: "Estudiante",
      image: "https://i.pravatar.cc/100",
      description: "Me gusta el Desarrollo Web",
    },
  ];

  return (
    <>
      <Students students={students} />
    </>
  );
}

export default App;
