import { Route, Routes } from "react-router-dom";
import Home from "../Routes/Home/home";
import Users from "../Routes/Users/users";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usersData" element={<Users />} />
    </Routes>
  );
}

export default App;
