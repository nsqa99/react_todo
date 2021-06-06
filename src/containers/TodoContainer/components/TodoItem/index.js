import React from "react";
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import style from "./style.module.css";

const TodoItem = ({ item, setDoneItem, setDeleteItem }) => {
    
    const handleDone = () => {
        setDoneItem({...item, isDone: !item.isDone});
    }

    const handleDelete = () => {
        setDeleteItem(item.id);
    }

    return (
        <div className={`${style.container} ${item.isDone ? style.faded : style.none}`}>
            <p className={item.isDone ? style.crossOver : style.none}>{item.title}</p>
            <div className={style.btnContainer}>
                <div className={style.btn} onClick={handleDone}>
                    <CheckIcon />
                </div>
                <div className={style.btn} onClick={handleDelete}>
                    <DeleteIcon />
                </div>
            </div>
        </div>
    );
}

export default TodoItem;