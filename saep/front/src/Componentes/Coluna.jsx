import { Tarefa } from './Tarefa';
import { useDroppable } from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

export function Coluna({ id, titulo, tarefas = [] }) {
    const { setNodeRef } = useDroppable({
        id
    })

    return (
            <section className='coluna' ref={setNodeRef}>
                {/*Titulo que recebi da coluna */}
                <h2>{titulo}</h2>
                {/* manipulação de array para fazer a exibição, eu posso usar o MAP */}
                {tarefas.map(tarefa => {
                    return <Tarefa key={tarefa.id} tarefa={tarefa} />
                })}
            </section>
    )
}
