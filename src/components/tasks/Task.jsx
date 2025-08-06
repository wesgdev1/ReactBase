export const Task = ({ task }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.completed}</p>
      <strong>{task.id}</strong>
    </div>
  );
};
