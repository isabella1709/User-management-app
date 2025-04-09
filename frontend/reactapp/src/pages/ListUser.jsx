import React from "react";

const ListUser = ({data}) => { // recebe a lista de usuários

  return (
    <div>
      <div className="header-listUser">
        <h1 className="title-listUser">Listando Usuários</h1>
      </div>

      <div className="back-list">
        <ul className="list">
          {data.map((item) => (
            <li key={item.id} className="li-listUser">
              <div className="card-listUser">
                <p><strong>Id:</strong> {item.id}</p>
                <p><strong>Nome:</strong> {item.nome}</p>
                <p><strong>Sobrenome:</strong> {item.sobrenome}</p>
                <p><strong>Email:</strong> {item.email}</p>
                <p><strong>Gênero:</strong> {item.genero}</p>
                <p><strong>Ano Nascimento:</strong> {item.anoNascimento}</p>
                <p><strong>CPF:</strong> {item.cpf}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListUser;
