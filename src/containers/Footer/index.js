import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FILTER_ACTIVE, FILTER_ALL, FILTER_DONE } from "../../redux/actions/filters";
import { DELETE_DONE } from "../../redux/actions/todos";
import style from "./style.module.css";

const Footer = ({ todos }) => {
    const [remaining, setRemaining] = useState(1);
    const [bordered, setBorder] = useState(1);
    const [completed, setCompleted] = useState(0);
    const dispatch = useDispatch();

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
                dispatch({
                    type: FILTER_ALL
                });
                break;
            case 2:
                dispatch({
                    type: FILTER_ACTIVE
                });
                break;
            case 3:
                dispatch({
                    type: FILTER_DONE
                });
                break;
            default:
                dispatch({
                    type: FILTER_ALL
                });
                break;
        }
    }

    const handleClearComplete = () => {
        dispatch({
            type: DELETE_DONE
        })
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