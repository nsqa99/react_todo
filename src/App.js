import { useState } from 'react';
import style from './App.module.css';
import AddForm from './components/AddForm';
import TodoContainer from './containers/TodoContainer';

const App = () => {
  const [todo, setTodo] = useState([]);

  return (
    <div className={style.app}>
      <h1>What's your plan today?</h1>
      <AddForm listTodos={todo} setTodo={setTodo} />
      <TodoContainer listTodos={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
