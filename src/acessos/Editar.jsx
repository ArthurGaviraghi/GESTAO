import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import "./acessos.css";


export default function EditarTarefa() {
  const [descricao, setDescricao] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    axios.get('https://api-tarefas-g9x2.onrender.com/tarefa', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      const tarefa = res.data.tarefas.find(t => t.id === parseInt(id))
      setDescricao(tarefa?.descricao || '')
    })
  }, [id, token])

  const salvar = async () => {
    await axios.put(`https://api-tarefas-g9x2.onrender.com/tarefa/${id}`, { descricao }, {
      headers: { Authorization: `Bearer ${token}` }
    })
    navigate('/tarefas')
  }

  return (
    <div>
      <h2>Editar Tarefa</h2>
      <input value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      <button onClick={salvar}>Salvar Alterações</button>
    </div>
  )
}
