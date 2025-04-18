import React from "react";
import { useNavigate } from "react-router-dom";

const DataList = ({ data, setData }) => { 
  // data é uma lista de usuários
  // setData é para atualizar a lista

  const navigate = useNavigate();

  const handleDelete = async (id) => { // função para deletar um usuário
    if (!window.confirm("Tem certeza que deseja remover este usuário?")) return; // confirmar a deleção

    try {
      await fetch(`http://localhost:8800/${id}`, { // enviar uma requisição de deleção para o backend com o id do usuário
        method: "DELETE",
      });

      setData((prev) => prev.filter((user) => user.id !== id)); // atualiza a lista
    } catch (err) { // caso contrário retorna erro na operação
      console.error("Erro ao deletar usuário:", err); 
    }
  };

  return (
    <div>
      <div className="header">
        <h1 className="title">Usuários</h1>
        <div className="btn">
          <button className="btn-header" onClick={() => navigate("/list")}>Listar</button>
          <button className="btn-header" onClick={() => navigate("/add")}>Adicionar</button>
        </div>
        
      </div>

      <div className="back-list">
        <ul className="list">
          {data.map((item) => (
            <li key={item.id} className="li-list">
              <div className="card">
                <div className="left">
                  <div className="info"><div className="item-info">Id:</div> {item.id}</div>
                  <div className="info"><div className="item-info">Nome:</div> {item.nome}</div>
                  <div className="info"><div className="item-info">CPF:</div> {item.cpf}</div>
                </div>
                <div className="right">
                  <button className="btn-list-1" onClick={() => navigate(`/details/${item.id}`)}>Mais Detalhes</button>
                  <button className="btn-list-2" onClick={() => navigate(`/edit/${item.id}`)}>Editar</button>
                  <button className="btn-list-3" onClick={() => handleDelete(item.id)}>Remover</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom">Isabella Vanderlinde Berkembrock</div>
    </div>
  );
};

export default DataList;
