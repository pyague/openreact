import logo from './logo.svg';
import './App.css';
import Greetings from './components/pure/greetings';
import Greetingsf from './components/pure/greetingsF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteConContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';
import Allcycles from './hooks/lifecycle/AllCycles';
import Greetingstyled from './components/pure/greetingStyled';

function App() {
  return (
    <div className="App">
        {/*Componente propio Greetinf.jsx*/}
        {/* <Greetings name="Martin"></Greetings> */}
        {/* Componente de ejemplo funcional */}
        {/* <Greetingsf name="Martin"></Greetingsf> */}
        {/* Componente de Listado de Tareas */}
        <TaskListComponent></TaskListComponent>
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre="Pablo">
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <Allcycles></Allcycles> */}
        {/* <Greetingstyled name="Pablo"></Greetingstyled> */}
    </div>
  );
}

export default App;
