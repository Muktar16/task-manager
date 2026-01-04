import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import axios from "axios";

export default function App() {
  
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUserList(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      {userList.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </>
  );
}
