import { useParams } from "react-router-dom";

export const StudentDetail = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Detalle del estudiante</h1>
      <p>{params.name}</p>
    </div>
  );
};
