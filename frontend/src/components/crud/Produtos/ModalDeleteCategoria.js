import axios from "axios"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom"

function ModalDeleteCategoria({ show, onHide, nome, id }) {

  var token = localStorage.getItem('token')
  const navigate = useNavigate()

  function handleDelete() {
    axios.delete(`http://localhost:8000/api/crud/categoria/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(() => {
      localStorage.setItem('msg', "Filme excluido com sucesso")
      navigate('/read')
    }).catch(() => {
      localStorage.setItem('msg', "Erro ao excluir filme")
      navigate('/read')
    })
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Excluir categoria</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Tem certeza que deseja excluir a categoria?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Fechar</Button>
        <Button variant="danger" onClick={handleDelete}>Excluir</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalDeleteCategoria