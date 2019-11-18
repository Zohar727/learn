import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST} from './actionTypes';
import Axios from 'axios';

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

// redux-thunk demo
export const getTodoList = () => {
    return () => {
        Axios.get('https://easy-mock.bookset.io/mock/5da922580e8b45138e6ccd63/gym/list').then((res) => {
            const data= res.data;
            console.log(data);
        })
    }
}

export const getMyListAction = () => ({
    type: GET_MY_LIST
})