import { useState } from "react";//possibilita o uso do setState
import "./ListaTarefas.css";//importa o css

function ListaTarefas() {//cria a função ListaTarefas
    const [tarefas, setTarefas] = useState([]);//cria o objeto tarefas
    const [novaTarefa, setNovaTarefa] = useState("");//deixa o estado da novaTarefa em branco

    function adicionarTarefa() {//cria função de adicionar uma nova tarefa
        setTarefas([...tarefas, novaTarefa]);//cria a nova tarefa
        setNovaTarefa("")//deixa ela em branco para entrar o dado do input
    }

    const removerTarefa = (indice) => {//cria a arrow function de remover uma tarefa adicionando um índice para cada tarefa
        setTarefas(tarefas.filter((_, i) => i !== indice));//remove a tarefa filtrando-a pelo indice
    };

    return (//possibilita o retorno da interface na tela

        <div className="lateral">
        <div className='esquerda'> 
            
          {/* cria o input com o valor do que você quer inserir na nova tarefa */}
            <input   
                type="text"
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                placeholder="Digite uma nova tarefa"
                
            />
            <button className='add' onClick={adicionarTarefa}>Adicionar</button> {/*botão de adicionar com a funçao de adicionar um atarefa */}
           
            </div>
            <div className='direita'>
            <h2>Lista de Tarefas</h2> {/* adiciona o titulo para a página */}
            <ul>
               {/*lista a tarefa pelo índice e cria o botão de remover pelo índice também */} 
               {tarefas.map((tarefa, indice) => (
                    <li key={indice}>
                        {tarefa}
                        <button className='remo' onClick={() => removerTarefa(indice)}>x</button>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default ListaTarefas; {/*exporta a função principal listaTarefas */}