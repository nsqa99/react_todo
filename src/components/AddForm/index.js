import React, { useState } from "react";
import style from "./style.module.css";

const AddForm = ({listTodos, setTodo}) => {
    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const lastItem = listTodos[listTodos.length-1];
        const newItem = {
            id: lastItem ? lastItem.id + 1 : 1,
            title: input,
            isDone: false
        }
        setTodo([...listTodos, newItem]);
        console.log(listTodos)
        setInput("");
    }

    return (
        <form className={style.formGroup}>
            <input className={style.input} type="text" placeholder="Enter your task..." value={input} onChange={handleInputChange} />
            <input className={`${style.btn} ${style.btnPrimary}`} type="submit" value="Add" onClick={handleSubmit} />
        </form>
    );
}

export default AddForm;