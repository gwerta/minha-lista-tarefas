import ListaTarefas from "./compontents/ListaTarefas" //importa o ListaTarefas

import "./App.css" //importa o css do app

function App() { //cria a função para rodar o app
  return (
    //retorna um título de gerenciador de tarefas com tudo colocado no lista tarefas dentro de um container
    <>
    <h1>Gerenciador de Tarefas</h1>
    <ListaTarefas />
    </> 
  )
}
//exporta o app
export default App
