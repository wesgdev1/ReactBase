import { Card } from "./components/Card";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Students } from "./pages/Students";
import { NavBar } from "./components/NavBar";
import { Bootcamp } from "./pages/Bootcamp";
import { Profile } from "./pages/Profile";

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
      <NavBar />
      {/* <Students students={students} /> */}
      <Routes>
        <Route path="/estudiantes" element={<Students students={students} />} />
        <Route path="/" element={<Bootcamp />} />
        <Route path="/miperfil" element={<Profile />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
