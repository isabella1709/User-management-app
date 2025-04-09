import React, { useState, useEffect } from "react";

// userState para controlar os dados do formulário
// userEffect para preencher os campos em modo de edição


const UserForm = ({ user, onClose }) => { 
  const [formData, setFormData] = useState({ // estado para armazenar os dados do formulário com valores vazios
    nome: "",
    sobrenome: "",
    email: "",
    genero: "",
    anoNascimento: "",
    cpf: "",
  });

  useEffect(() => { // se o componente recebe um user, preenche os campos do formulário no modo de edição
    if (user) {
      setFormData({
        nome: user.nome,
        sobrenome: user.sobrenome,
        email: user.email,
        genero: user.genero,
        anoNascimento: user.anoNascimento,
        cpf: user.cpf,
      });
    }
  }, [user]);

  const handleChange = (e) => { // função para atualizar os valores do formulário quando o usuário digita
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => { // validação de campos do formulário
    const { nome, sobrenome, email, genero, anoNascimento, cpf } = formData;

    if (!nome.trim()) {
      alert("O campo 'Nome' é obrigatório.");
      return false;
    }

    if (!sobrenome.trim()) {
      alert("O campo 'Sobrenome' é obrigatório.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Email inválido!");
      return false;
    }

    const ano = parseInt(anoNascimento, 10);
    const anoAtual = new Date().getFullYear();
    if (isNaN(ano) || ano < 1900 || ano > anoAtual - 10) {
      alert("Ano de nascimento inválido!");
      return false;
    }

    const cpfLimpo = cpf.replace(/\D/g, "");
    if (cpfLimpo.length !== 11) {
      alert("O campo de CPF deve conter exatamente 11 dígitos.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // evitar o recarregamento da página

    if (!validateForm()) return; //chama o método de validação de campos

    const method = user ? "PUT" : "POST"; // caso receber um user edita o usuário, caso contrário cadastra um novo usuário
    const url = user
      ? `http://localhost:8800/${user.id}` // url caso estiver editando
      : "http://localhost:8800";

    try {
      await fetch(url, { // envia os dados usando JSON
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      onClose(); 
    } catch (err) { //caso contrário retorna um erro na operação
      console.error("Erro ao salvar usuário:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="top">
        <input name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
        <input name="sobrenome" placeholder="Sobrenome" value={formData.sobrenome} onChange={handleChange} />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
        <input name="genero" placeholder="Gênero" value={formData.genero} onChange={handleChange}/>
        <input name="anoNascimento" placeholder="Ano de Nascimento" value={formData.anoNascimento} onChange={handleChange} />
        <input name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} />
      </div>
      <div className="botton">
        <button type="submit">Salvar</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </div>
    </form>
  );
};

export default UserForm;
