import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../../redux/actions/todos";
import style from "./style.module.css";

const AddForm = ({ listTodos }) => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const lastItem = listTodos[listTodos.length - 1];
        const newItem = {
            id: lastItem ? lastItem.id + 1 : 1,
            title: input,
            isDone: false
        }
        dispatch({
            type: ADD_TODO,
            payload: newItem
        });
        setInput("");
    }

    return (
        <form className={style.formGroup} onSubmit={handleSubmit}>
            <input className={style.input} type="text" placeholder="Enter your task..." value={input} onChange={handleInputChange} />
        </form>
    );
}

export default AddForm;