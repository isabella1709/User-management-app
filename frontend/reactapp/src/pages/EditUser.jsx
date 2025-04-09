import React, { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = ({ onSaved }) => {
  const { id } = useParams(); // armazenar id que vem na url
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // inicializa o user como null

  useEffect(() => {
    const fetchUser = async () => {
      try { // faz uma requisição GET para buscar o usuário pelo id
        const res = await fetch(`http://localhost:8800/${id}`);
        const json = await res.json();
        setUser(json); // armazena os dados do user
      } catch (err) {
        console.error("Erro ao buscar usuário:", err);
      }
    };

    fetchUser();
  }, [id]);

  const handleClose = () => {
    onSaved(); // atualiza a lista de usuários
    navigate("/"); // redireciona para página inicial
  };

  if (!user) return <p>Carregando...</p>; // enquanto os dados do usuário não forem carregados

  return (
    <div className="crud-user">
        <div className="modal-content">
            <h1>Editar Usuário</h1>
            <UserForm user={user} onClose={handleClose} /> 
        </div>
    </div>
  );
};

export default EditUser;
