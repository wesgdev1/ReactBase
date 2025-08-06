import { useLocation, useParams } from "react-router-dom";

export const StudentDetail = () => {
  const params = useParams();
  console.log(params);

  // Recuperar estadi con useLocation

  const state = useLocation().state;
  console.log(state);

  return (
    <div>
      <h1>Detalle del estudiante</h1>
      <p>{params.name}</p>
      <img src={state.image} alt={state.name} />
    </div>
  );
};
