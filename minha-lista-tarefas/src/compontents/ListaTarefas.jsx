import { useState, useEffect } from "react";//possibilita o uso do setState e do useEffect/local storage
import "./ListaTarefas.css";//importa o css

function ListaTarefas() {//cria a função ListaTarefas
    const [tarefas, setTarefas] = useState([]);//cria o objeto tarefas
    const [novaTarefa, setNovaTarefa] = useState("");//deixa o estado da novaTarefa em branco
    const [ordemAlfabetica, setOrdemAlfabetica] = useState(false);//cria a variável para mudar a ordem

    function adicionarTarefa() {//cria função de adicionar uma nova tarefa
        setTarefas([...tarefas, novaTarefa]);//cria a nova tarefa
        setNovaTarefa("")//deixa ela em branco para entrar o dado do input
    }

    const removerTarefa = (indice) => {//cria a arrow function de remover uma tarefa adicionando um índice para cada tarefa
        setTarefas(tarefas.filter((_, i) => i !== indice));//remove a tarefa filtrando-a pelo indice
    };
    //muda a ordem de normal pra alfabetica
    const mudaOrdem = () => {
        setOrdemAlfabetica(!ordemAlfabetica);
    };
    //cria a função de concluir a tarefa
    const concluida = (indice) => {
      const novasTarefas = [...tarefas];
      novasTarefas[indice].concluida = !novasTarefas[indice].concluida; // Alterna o estado de concluída
      setTarefas(novasTarefas);
    };
  

    return (//possibilita o retorno da interface na tela

        <div className="lateral">
        <div className='esquerda'> 
        <button class='add' onClick={mudaOrdem}>
        {ordemAlfabetica ? "Mostrar ordem normal" : "Mostrar ordem alfabética"}
      </button>
            
          {/* cria o input com o valor do que você quer inserir na nova tarefa */}
            <input
                className="insira"   
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
               {(ordemAlfabetica ? [...tarefas].sort() : tarefas).map((tarefa, indice) => ( 
                    <li key={indice}>
                        {/*cria o checkbox para marcar a tarefa como concluída ou não */}
                         <input
                                className="check"
                                type="checkbox"
                                checked={tarefa.concluida}
                                onChange={() => concluida(indice)}
                            />
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