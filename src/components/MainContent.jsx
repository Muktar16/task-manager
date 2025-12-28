import { useEffect, useState } from "react";

export function MainContent({ title }) {
  const [todoList, setTodos] = useState([]);

  useEffect(() => {
    setTodos((prev) => [...prev, "Buy a new house"]);
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {todoList.map((value, key) => (
          <li key={key}>{`Item ${key + 1} : ${value}`}</li>
        ))}
      </ul>
    </div>
  );
}
