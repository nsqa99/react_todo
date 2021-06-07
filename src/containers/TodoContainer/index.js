import React, { useEffect, useState } from "react";
import handleFilter from "../../utils/handleFilter";
import TodoItem from "./components/TodoItem";
import style from "./style.module.css";

const TodoContainer = ({ listTodos, setTodo, action }) => {
    const [doneItem, setDoneItem] = useState(-1);
    const [deleteItem, setDeleteItem] = useState(-1);
    const [virtualList, setVirtualList] = useState(listTodos);

    useEffect(() => {
        setVirtualList(handleFilter(action, listTodos));
    }, [listTodos, action]);

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
            {virtualList.map(todo => {
                return (
                    <TodoItem item={todo} key={todo.id} setDoneItem={setDoneItem} setDeleteItem={setDeleteItem} />
                );
            })}

        </div>
    );
}

export default TodoContainer;