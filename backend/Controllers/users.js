import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM users";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const getUserById = (req, res) => {
  const id = req.params.id;
  const q = "SELECT * FROM users WHERE id = ?";

  db.query(q, [id], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json({ error: "Usuário não encontrado" });
    return res.status(200).json(data[0]);
  });
};

export const addUser = (req, res) => {
  const { nome, sobrenome, email, genero, anoNascimento, cpf } = req.body;
  const q = "INSERT INTO users (nome, sobrenome, email, genero, anoNascimento, cpf) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(q, [nome, sobrenome, email, genero, anoNascimento, cpf], (err, data) => {
    if (err) {
      console.error("Erro ao inserir usuário:", err);
      return res.status(500).json(err);
    }
    return res.status(201).json(data);
  });
};

export const updateUser = (req, res) => {
  const { nome, sobrenome, email, genero, anoNascimento, cpf } = req.body;
  const id = req.params.id;
  const q = "UPDATE users SET nome = ?, sobrenome = ?, email = ?, genero = ?, anoNascimento = ?, cpf = ? WHERE id = ?";

  db.query(q, [nome, sobrenome, email, genero, anoNascimento, cpf, id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};


export const deleteUser = (req, res) => {
  const id = req.params.id;
  const q = "DELETE FROM users WHERE id = ?";

  db.query(q, [id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "Usuário deletado com sucesso" });
  });
};
