import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./acessos.css";

export default function CriarTarefa() {
  const [descricao, setDescricao] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const salvar = async () => {
    try {
      await axios.post('https://api-tarefas-g9x2.onrender.com/tarefa', 
        { descricao },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigate('/tarefas');
    } catch (err) {
      console.error("Erro ao criar tarefa:", err);
      alert("Erro ao salvar tarefa.");
    }
  };

  return (
    <div class="flex">
      <div class='conteiner'>
      <h2>Criar Tarefa</h2>
      <input
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descrição"
      />
      <button onClick={salvar}>Salvar</button>
    </div>
    </div>
  );
}
