import {takeEvery, put} from 'redux-saga/effects'
import {GET_MY_LIST} from './actionTypes'
import {getListAction} from './actionCreatores'
import axios from 'axios'

function* mySaga() {
    // 捕获action
    yield takeEvery(GET_MY_LIST, getList);
} 

function* getList() {
    console.log('redux-saga test');
    const res = yield axios.get('https://easy-mock.bookset.io/mock/5da922580e8b45138e6ccd63/gym/list');
    const action = getListAction(res.data);
    yield put(action);
}

export default mySaga;