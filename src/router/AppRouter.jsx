import { Routes, Route } from "react-router-dom";
import Users from "../pages/Users";
import App from "../App";

export default function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/users' element={<App />} />
    </Routes>
  );
}
