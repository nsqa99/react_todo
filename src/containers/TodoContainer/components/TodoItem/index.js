import React from "react";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ClearIcon from '@material-ui/icons/Clear';
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { DELETE_TODO, MARK_TODO_AS_DONE } from "../../../../redux/actions/todos";

const TodoItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleDone = () => {
        dispatch({
            type: MARK_TODO_AS_DONE,
            payload: {
                id: item.id
            }
        });
    }

    const handleDelete = () => {
        dispatch({
            type: DELETE_TODO,
            payload: {
                id: item.id
            }
        });
    }

    return (
        <div className={style.container}>
            <div className={style.btnCheck} onClick={handleDone}>
                {!item.isDone ? <RadioButtonUncheckedIcon /> : <CheckCircleOutlineIcon style={{ color: "#00ff1e" }} />}
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