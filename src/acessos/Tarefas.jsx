import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./acessos.css";


export default function Tarefas() {
  const [tarefas, setTarefas] = useState([])
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const carregar = async () => {
    const res = await axios.get('https://api-tarefas-z3r7.onrender.com/tarefa', {
      headers: { Authorization: `Bearer ${token}` }
    })
    setTarefas(res.data.tarefas)
  }

  const excluir = async (id) => {
    await axios.delete(`https://api-tarefas-z3r7.onrender.com/tarefa/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    carregar()
  }

  useEffect(() => { carregar() }, [])

  return (
     <div class='flex'>
    <div class='conteiner'>
     
      <div class='centralizar'>
      <h2>
        <img src="https://static.vecteezy.com/ti/vetor-gratis/p1/6711606-icone-lapis-isolado-em-fundo-branco-icone-lapis-moderno-e-sinal-simples-lapis-icone-design-ilustracao-lapis-desenhar-logo-design-vetor.jpg" alt="" />
        Minhas Tarefas</h2>
      <button class='btc' onClick={() => navigate('/criar')}>Criar Nova</button>
      </div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa.id}>
            <div class="tx">
            {tarefa.descricao}
            </div>
            <div class='bt'>
            <button onClick={() => navigate('/editar/' + tarefa.id)}>Editar</button>
            <button class='um' onClick={() => excluir(tarefa.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}
