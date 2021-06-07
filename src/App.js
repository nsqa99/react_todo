import React from 'react';
import { useSelector } from 'react-redux';
import style from './App.module.css';
import AddForm from './components/AddForm';
import Footer from './containers/Footer';
import TodoContainer from './containers/TodoContainer';

const App = () => {
  const todos = useSelector(state => state.todos);

  return (
    <div className={style.app}>
      <h1>What's your plan today?</h1>
      <AddForm listTodos={todos.todos} />
      <TodoContainer listTodos={todos} />
      {todos.todos.length > 0 && <Footer todos={todos.todos} />}
    </div>
  );
}

export default App;
