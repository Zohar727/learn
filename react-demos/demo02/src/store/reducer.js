import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './actionTypes';

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
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState
    }

    return state;
}