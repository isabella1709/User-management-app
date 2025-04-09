import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserDetails = () => {
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

  if (!user) return <p>Carregando...</p>; // enquanto os dados do usuário não forem carregados

  return (
    <div className="crud-user">
        <div className="modal-content">
            <h1>Detalhes do Usuário</h1>
            <p><strong>Id:</strong> {user.id}</p>
            <p><strong>Nome:</strong> {user.nome}</p>
            <p><strong>Sobrenome:</strong> {user.sobrenome}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Gênero:</strong> {user.genero}</p>
            <p><strong>Ano Nascimento:</strong> {user.anoNascimento}</p>
            <p><strong>CPF:</strong> {user.cpf}</p>
            <button onClick={() => navigate("/")}>Voltar</button>
        </div>
    </div>
  );
};

export default UserDetails;
