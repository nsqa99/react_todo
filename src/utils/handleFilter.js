const handleFilter = (action, list) => {
    let result = [];
    switch (action) {
        case 1:
            result = handleFilterAll(list);
            break;
        case 2:
            result = handleFilterActive(list);
            break;
        default:
            result = handleFilterCompleted(list);
            break;
    }
    return result;
}

const handleFilterAll = (list) => {
    return list;
}

const handleFilterActive = (list) => {
    return list.filter(todo => {
        return (todo.isDone === false);
    });
}

const handleFilterCompleted = (list) => {
    return list.filter(todo => {
        return (todo.isDone === true);
    });
}
export default handleFilter;