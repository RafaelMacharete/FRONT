//props: são propriedades que passam de um componente para outro
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';


export function Tarefa({ tarefa }) {
    const navigate = useNavigate();

    // Para fazer o uso do Draggable, precisamos usar o hook respectivo:
    // Ele precisa de quatro características, setNodeRef é o que permite o reconhecimento do que vamos fazer com o DOM
    // atributes: permite a seleção deles pelo perifericos (mouse, teclado e dedo)
    // listeners: ouvintes são aqueles que estão sempre ouvindo se há algum evento
    // transform: é quem me da a sensação de movimento
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: tarefa.id
    });

    const style = {
        transform: CSS.Translate.toString(transform)
    };

    function handleEdit(id) {
        navigate(`cadTarefas/${id}`);
    }

    function handleDelete(id) {
        const apiURL = `http://127.0.0.1:8000/tasks/${id}`;
        axios.delete(apiURL)
            .then(response => {
                alert('Tarefa exclúida!')
                window.location.reload();
                console.log("Tarefa excluída", response.data);
            })
            .catch(error => {
                console.error("Erro ao excluir tarefa", error);
            });
    }

    function handleStatusChange(event) {
        event.preventDefault();
        const newStatus = event.target.status.value;
        
        const apiURL = `http://127.0.0.1:8000/tasks/${tarefa.id}`;
        axios.patch(apiURL, { status: newStatus })
            .then(response => {
                window.location.reload();
            })
            .catch(error => {
                console.error("Erro ao atualizar status da tarefa", error);
            });
    }

    return (
        <article className="tarefa" ref={setNodeRef} style={style}>
            <div {...listeners}{...attributes} role="article">
                <h3 id={tarefa.id}>Descrição: </h3>
                <p>{tarefa.description}</p>
            </div>
            <dl>
                <dt>Setor:</dt>
                <dd>{tarefa.department}</dd>

                <dt>Prioridade:</dt>
                <dd>{tarefa.priority}</dd>

                <dt>Vinculado a:</dt>
                <dd>{tarefa.user_name}</dd>
            </dl>
            <button type="submit" onClick={() => handleEdit(tarefa.id)}>Editar</button>
            <button type="submit" onClick={() => handleDelete(tarefa.id)}>Excluir</button>

            <form className="formStatus" onSubmit={handleStatusChange}>
                <label htmlFor={tarefa.id}>Status:</label>
                <select id={tarefa.id} name="status">
                    <option value=''>Selecione o status</option>
                    <option value='todo'>A fazer</option>
                    <option value='doing'>Fazendo</option>
                    <option value='done'>Pronto</option>
                </select>
                <button type='submit'>Alterar Status</button>
            </form>
        </article>
    )
}