import React from "react";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ClearIcon from '@material-ui/icons/Clear';
import style from "./style.module.css";

const TodoItem = ({ item, setDoneItem, setDeleteItem }) => {

    const handleDone = () => {
        setDoneItem({ ...item, isDone: !item.isDone });
    }

    const handleDelete = () => {
        setDeleteItem(item.id);
    }

    return (
        <div className={style.container}>
            <div className={style.btnCheck} onClick={handleDone}>
                {!item.isDone ? <RadioButtonUncheckedIcon /> : <CheckCircleOutlineIcon style={{color: "#00ff1e"}} />}
            </div>
            <p className={item.isDone ? style.done : style.none}>{item.title}</p>
            <div className={style.btnContainer}>
                <div className={style.btn} onClick={handleDelete}>
                    <ClearIcon className={style.btnClear} />
                </div>
            </div>
        </div>
    );
}

export default TodoItem;