import React from "react";
import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";

const AddUser = ({ onSaved }) => {
  const navigate = useNavigate();

  const handleClose = () => { //função para quando o formulário for finalizado
    onSaved(); // atualiza a lista de usuários
    navigate("/"); // redireciona para página inicial
  };

  return (
    <div className="crud-user">
        <div className="modal-content">
            <h1>Adicionar Usuário</h1>
            <UserForm onClose={handleClose} />
        </div>
    </div>
    
  );
};

export default AddUser;
