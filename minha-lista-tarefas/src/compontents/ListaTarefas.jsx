import { useState, useEffect } from "react";//possibilita o uso do setState e do useEffect/local storage
import "./ListaTarefas.css";//importa o css

function ListaTarefas() {//cria a função ListaTarefas
    const [tarefas, setTarefas] = useState([]);//cria o objeto tarefas
    const [novaTarefa, setNovaTarefa] = useState("");//deixa o estado da novaTarefa em branco
    const [ordemAlfabetica, setOrdemAlfabetica] = useState(false);//cria a variável para mudar a ordem

    function adicionarTarefa() {//cria função de adicionar uma nova tarefa com o nome captado pela string e o status de concluida como falso
     if(novaTarefa){//verifica se existe um valor na novaTarefa
        setTarefas([
            ...tarefas,
            { nome: novaTarefa, concluida: false }
          ]);
          setNovaTarefa("");//cria a nova tarefa
        }
    }

    const removerTarefa = (indice) => {//cria a arrow function de remover uma tarefa adicionando um índice para cada tarefa
        setTarefas(tarefas.filter((_, i) => i !== indice));//remove a tarefa filtrando-a pelo indice
    };
    
    const mudaOrdem = () => {//muda a ordem de normal pra alfabetica
        setOrdemAlfabetica(!ordemAlfabetica);
    };
    
    const concluida = (indice) => {//cria a função de concluir a tarefa
      const novasTarefas = [...tarefas];
      novasTarefas[indice].concluida = !novasTarefas[indice].concluida; // Alterna o estado de concluída
      setTarefas(novasTarefas);
    };

     
     useEffect(() => {// converte as arrays em string e salva no localstorage
        if (tarefas.length > 0) {
        localStorage.setItem("tarefas", JSON.stringify(tarefas)); 
        }
    }, [tarefas]); 

    
  const buscarTarefas = () => {// Função para buscar tarefas do localStorage
    const tarefasSalvas = localStorage.getItem("tarefas");  
    if (tarefasSalvas) {
      return JSON.parse(tarefasSalvas); //converte o json em string
    }
    return []; 
  };

//atualiza a pagina ja com as tarefas carregadas
    useEffect(() => {
        const tarefasCarregadas = buscarTarefas();
        setTarefas(tarefasCarregadas);
    },
         []);


    return (//possibilita o retorno da interface na tela

        <div className="lateral">
             <div className='esquerda'> 
        <button class='add' onClick={mudaOrdem}>
            <span className="text"> 
                 {ordemAlfabetica ?"Mostrar ordem normal" : "Mostrar ordem alfabética"}
            </span>
         </button>
            
          {/* cria o input com o valor do que você quer inserir na nova tarefa */}
            <input
                className="insira"   
                type="text"
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                placeholder="Digite uma nova tarefa:"
                
            />
            <button className='add' onClick={adicionarTarefa}><span className="text">Adicionar</span></button> {/*botão de adicionar com a funçao de adicionar um atarefa */}
           
             </div>
            <div className='direita'>
                 <h2>Lista de Tarefas</h2> {/* adiciona o titulo para a página */}
            <ul>
               {/*lista a tarefa com a possibilidade de mudar a ordem original ou alfabética mantendo as tarefas checkadas */} 
               {(ordemAlfabetica ? [...tarefas].sort((a, b) => a.nome.localeCompare(b.nome)) : tarefas).map((tarefa, indice) => (
                    <li key={indice}>
                        <input
                            className="check"
                            type="checkbox"
                            checked={tarefa.concluida}
                            onChange={() => concluida(indice)}
                        />
                            <span
                                style={{
                                    textDecoration: tarefa.concluida ? "line-through" : "none",
                                    color: tarefa.concluida  ? "gray" : "#070064" // Muda a cor do texto e adiciona uma linha quando concluido
                                }}
                                >
                                 {tarefa.nome}
                             </span>
                        
                        <button className='remo' onClick={() => removerTarefa(indice)}>x</button>
                    </li>
))}
            </ul>
            </div>
     </div>
    );
}

export default ListaTarefas; {/*exporta a função principal listaTarefas */}