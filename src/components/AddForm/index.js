import React, { useState } from "react";
import style from "./style.module.css";

const AddForm = ({ listTodos, setTodo }) => {
    const [input, setInput] = useState("");

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
        setTodo([...listTodos, newItem]);
        setInput("");
    }

    return (
        <form className={style.formGroup} onSubmit={handleSubmit}>
            <input className={style.input} type="text" placeholder="Enter your task..." value={input} onChange={handleInputChange} />
        </form>
    );
}

export default AddForm;