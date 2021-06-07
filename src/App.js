import { useState } from 'react';
import style from './App.module.css';
import AddForm from './components/AddForm';
import Footer from './containers/Footer';
import TodoContainer from './containers/TodoContainer';

const App = () => {
  const [todo, setTodo] = useState([]);
  const [action, setAction] = useState(1);

  return (
    <div className={style.app}>
      <h1>What's your plan today?</h1>
      <AddForm listTodos={todo} setTodo={setTodo} />
      <TodoContainer listTodos={todo} setTodo={setTodo} action={action} />
      {todo.length > 0 && <Footer todos={todo} setTodo={setTodo} setAction={setAction} />}
    </div>
  );
}

export default App;
