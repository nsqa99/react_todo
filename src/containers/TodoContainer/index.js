import React, { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import style from "./style.module.css";

const TodoContainer = ({ listTodos, setTodo }) => {
    const [doneItem, setDoneItem] = useState(-1);
    const [deleteItem, setDeleteItem] = useState(-1);

    const handleUpdateTodo = () => {
        setTodo(
            listTodos.map(todo => {
                if (todo.id === doneItem.id) {
                    return doneItem;
                }
                return todo;
            })
        )
    }

    const handleDeleteTodo = () => {
        setTodo(
            listTodos.filter(todo => {
                return (todo.id !== deleteItem);
            })
        )
    }

    useEffect(() => {
        handleUpdateTodo();
    }, [doneItem]);

    useEffect(() => {
        handleDeleteTodo();
    }, [deleteItem]);

    return (
        <div className={style.container}>
            {listTodos.map(todo => {
                return (
                    <TodoItem item={todo} key={todo.id} setDoneItem={setDoneItem} setDeleteItem={setDeleteItem} />
                );
            })}

        </div>
    );
}

export default TodoContainer;