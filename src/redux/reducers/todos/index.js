import { FILTER_ALL, FILTER_ACTIVE, FILTER_DONE } from "../../actions/filters";
import { ADD_TODO, DELETE_DONE, DELETE_TODO, MARK_TODO_AS_DONE } from "../../actions/todos";

const initialState = {
    todos: [],
    visibility: FILTER_ALL
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case MARK_TODO_AS_DONE:
            return {
                ...state,
                todos: state.todos.map(item => {
                    if (item.id === action.payload.id) {
                        item = { ...item, isDone: !item.isDone }
                    }
                    return item;
                })
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== action.payload.id)
            };
        case DELETE_DONE:
            return {
                ...state,
                todos: state.todos.filter(item => item.isDone !== true)
            };
        case FILTER_ALL:
            return {
                ...state,
                visibility: FILTER_ALL
            };
        case FILTER_ACTIVE:
            return {
                ...state,
                visibility: FILTER_ACTIVE
            };
        case FILTER_DONE:
            return {
                ...state,
                visibility: FILTER_DONE
            };

        default:
            return state;
    }
}