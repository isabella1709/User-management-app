import "./App.css";
import DataList from "./components/DataList";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import UserDetails from "./pages/UserDetails";
import ListUser from "./pages/ListUser";

function App() {
  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:8800");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Erro ao buscar usuários:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DataList data={data} setData={setData} />} />
        <Route path="/list" element={<ListUser data={data} setData={setData} />} />
        <Route path="/add" element={<AddUser onSaved={fetchUsers} />} />
        <Route path="/edit/:id" element={<EditUser onSaved={fetchUsers} />} />
        <Route path="/details/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
