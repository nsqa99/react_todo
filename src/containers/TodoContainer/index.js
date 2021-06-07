import React, { useEffect, useState } from "react";
import { FILTER_ACTIVE, FILTER_ALL, FILTER_DONE } from "../../redux/actions/filters";
import TodoItem from "./components/TodoItem";
import style from "./style.module.css";

const TodoContainer = ({ listTodos }) => {
    const { todos, visibility } = listTodos;
    const [virtualList, setVirtualList] = useState(todos);

    useEffect(() => {
        switch (visibility) {
            case FILTER_ALL:
                setVirtualList(todos);
                break;
            case FILTER_ACTIVE:
                setVirtualList(todos.filter(todo => todo.isDone !== true));
                break;
            case FILTER_DONE:
                setVirtualList(todos.filter(todo => todo.isDone !== false));
                break;
            default:
                break;
        }
    }, [listTodos]);

    return (
        <div className={style.container}>
            {virtualList.map(todo => {
                return (
                    <TodoItem item={todo} key={todo.id} />
                );
            })}

        </div>
    );
}

export default TodoContainer;