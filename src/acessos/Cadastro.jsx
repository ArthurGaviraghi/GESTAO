import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const cadastrar = async () => {
    if (!nome || !email || !senha) {
      return alert("Preencha todos os campos");
    }

    try {
      const resposta = await axios.post('https://api-tarefas-z3r7.onrender.com/usuario', {
        nome,
        email,
        senha,
      });

      if (resposta.status === 201 || resposta.status === 200) {
        alert("Cadastro realizado com sucesso!");
        navigate('/login');
      } else {
        alert("Erro ao cadastrar.");
      }
    } catch (erro) {
      console.error("Erro no cadastro:", erro);
      alert("Erro ao cadastrar usuário. Verifique se o email já está em uso.");
    }
  };

  return (
      <div class='flex'>
    <div class='conteiner'>
      <h2>Cadastro</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={cadastrar}>Criar Conta</button>
    </div>
      </div>
  );
}
