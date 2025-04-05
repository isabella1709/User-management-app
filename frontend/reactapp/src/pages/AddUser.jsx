import React from "react";
import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";

const AddUser = ({ onSaved }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onSaved();
    navigate("/");
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
