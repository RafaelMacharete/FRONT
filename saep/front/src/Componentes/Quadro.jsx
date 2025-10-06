//hooks são palavras reservadas que nos ajudam a desenvolver nossas aplicações
//começou com "use" 98% de chance de ser um hook do react
//state grava o estado atual de uma variavel
//effect é fofoqueiro, ele quer contar o que o usuário precisa saber
import { useState, useEffect } from "react";
import axios from 'axios';
import { Coluna } from './Coluna';
import { DndContext } from "@dnd-kit/core"; // Biblioteca que me fala qual é a área 
// que me permite clicar e arrastar

export function Quadro() {
    const [tarefas, setTarefas] = useState([])

    //()recepção de parametros, {} scripts, []dependencias
    useEffect(() => {
        const apiURL = 'http://127.0.0.1:8000/tasks/';
        //axios faz requisição http
        axios.get(apiURL)
            //se der bom eu armazeno o setTarefas usando a resposta do axios
            .then(response => {
                setTarefas(response.data);
            })
            //se der ruim eu vejo o problema no console
            .catch(error => { console.error("Deu ruim", error) })
    }, [])

    function handleDragEnd(event) {
        const { active, over } = event;

        if (over && active) {
            const tarefaId = active.id;
            const novaColuna = over.id;

            setTarefas(prev =>
                prev.map(tarefa =>
                    tarefa.id === tarefaId ? { ...tarefa, status: novaColuna } : tarefa
                )
            )

            axios.patch(`http://localhost:8000/tasks/${tarefaId}    `, {
                status: novaColuna
            }).catch(err => console.log('Houve um erro', err));

        }
    }
    //tenho 3 arrays cada qual com um status de tarefas possivel no meu kanban 
    const tarefasAfazer = tarefas.filter(tarefa => tarefa.status === 'todo');
    const tarefasFazendo = tarefas.filter(tarefa => tarefa.status === 'doing');
    const tarefasPronto = tarefas.filter(tarefa => tarefa.status === 'done');

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <main className="quadro">
                <h1>Quadro</h1>
                <section className="colunas">
                    <Coluna key={'todo'} id='todo' titulo='A fazer' tarefas={tarefasAfazer} />
                    <Coluna key={'doing'} id='doing' titulo='Fazendo' tarefas={tarefasFazendo} />
                    <Coluna key={'done'} id='done' titulo='Pronto' tarefas={tarefasPronto} />
                </section>
            </main>
        </DndContext>
    )
}