import React, { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = ({ onSaved }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`http://localhost:8800/${id}`);
        const json = await res.json();
        setUser(json);
      } catch (err) {
        console.error("Erro ao buscar usuário:", err);
      }
    };

    fetchUser();
  }, [id]);

  const handleClose = () => {
    onSaved();
    navigate("/");
  };

  if (!user) return <p>Carregando...</p>;

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
