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

  // data é uma lista de usuários
  // setData é para atualizar a lista

  const fetchUsers = async () => {
  try { // faz uma requisição GET para o backend
      const res = await fetch("http://localhost:8800");
      const json = await res.json(); // converte o resultado para JSON
      setData(json); // atualiza a lista de usuários
    } catch (err) { //caso contrário retorna um erro na operação
      console.error("Erro ao buscar usuários:", err);
    }
  };

  useEffect(() => { // chama o fetchUsers para preencher a lista de usuários
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
