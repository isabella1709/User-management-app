import React, { useState, useEffect } from "react";

const UserForm = ({ user, onClose }) => {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    genero: "",
    anoNascimento: "",
    cpf: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        nome: user.nome,
        sobrenome: user.sobrenome,
        email: user.email,
        genero: user.genero,
        anoNascimento: user.anoNascimento,
        cpf: user.cpf
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = user ? "PUT" : "POST";
    const url = user
      ? `http://localhost:8800/${user.id}`
      : "http://localhost:8800";

    try {
      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

    
      onClose();
    } catch (err) {
      console.error("Erro ao salvar usuário:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="top">
            <input name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange}/>
            <input name="sobrenome" placeholder="Sobrenome" value={formData.sobrenome} onChange={handleChange}/>
            <input name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
            <input name="genero" placeholder="Gênero" value={formData.genero} onChange={handleChange}/>
            <input name="anoNascimento" placeholder="Ano de Nascimento" value={formData.anoNascimento} onChange={handleChange}/>
            <input name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange}/>
        
        </div>
        <div className="botton">
            <button type="submit">Salvar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
        </div>
    </form>    
  );
};

export default UserForm;
