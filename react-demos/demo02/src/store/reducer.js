const defaultState = {
    inputValue: 'input anything',
    list: [
        'to finish month report',
        'daily meeting',
        'do some excrise',
        'buy some fruit'
    ]
}; // 默认数据

export default (state = defaultState,action) => {
    console.log(state, action);
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    if (action.type === 'delItem') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState
    }

    return state;
}