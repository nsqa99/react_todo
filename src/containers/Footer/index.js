import React, { useEffect, useState } from "react";
import style from "./style.module.css";

const Footer = ({ todos, setTodo, setAction }) => {
    const [remaining, setRemaining] = useState(1);
    const [bordered, setBorder] = useState(1);
    const [completed, setCompleted] = useState(0);

    const filters = [
        { id: 1, title: "All" },
        { id: 2, title: "Active" },
        { id: 3, title: "Completed" },
    ]

    useEffect(() => {
        let count = 0;
        todos.forEach(todo => {
            if (!todo.isDone) count++;
        })
        setRemaining(count);
        setCompleted(todos.length - count);
    }, [todos]);

    const handleClick = (id) => {
        setBorder(id);
        switch (id) {
            case 1:
                setAction(1);
                break;
            case 2:
                setAction(2);
                break;
            default:
                setAction(3);
                break;
        }
    }

    const handleClearComplete = () => {
        setTodo(todos.filter(todo => {
            return (todo.isDone === false);
        }));
    }

    return (
        <div className={style.container}>
            <div>
                <p>{remaining} items left</p>
            </div>
            <div>
                <ul>
                    {filters.map(filter => {
                        return (
                            <li
                                onClick={() => handleClick(filter.id)}
                                className={bordered === filter.id ? style.selected : style.none}
                                key={filter.id}
                            >
                                {filter.title}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div>
                <p className={`${style.pointer} ${completed === 0 ? style.hidden : style.none}`} onClick={handleClearComplete}>Clear completed</p>
            </div>
        </div>
    );
}

export default Footer;