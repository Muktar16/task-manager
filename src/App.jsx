import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import axios from "axios";

export default function App() {
  const [userList, setUserList] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  const createUser = () => {
    console.log("Creating user...");
    console.log('user created...');
    setIsCreated(true);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log("response", response);
        setUserList(response.data);
      } catch (error) {
        setErrorMsg("Something went wrong...");
        console.error("Error fetching users:");
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <p>{errorMsg}</p>
      <button 
        onClick={createUser}
      >Create User</button>
      {userList?.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
}
