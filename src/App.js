import logo from './logo.svg';
import './App.css';
import Todos from './Components/Todos'
import AddTodos from './Components/AddTodo'


function App() {

  return (
   <>
   <h1 className='mainheading'>LIST WHAT TO DO TODAY</h1>
   <AddTodos/>
   <Todos/>
   </>
  );
}

export default App;
