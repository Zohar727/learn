import React, { Component } from 'react';
import store from './store'
// import {changeInputAction, addItemAction, deleteItemAction, getTodoList} from './store/actionCreatores'
import {changeInputAction, addItemAction, deleteItemAction, getMyListAction} from './store/actionCreatores'
import TodoListUI from './TodoListUI';
// import axios from 'axios';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.submit = this.submit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.changInputValue = this.changInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange); // 订阅redux状态
        console.log(this.state);
    }

    componentDidMount () {
        // axios.get('https://easy-mock.bookset.io/mock/5da922580e8b45138e6ccd63/gym/list').then((res) => {
        //     console.log(res.data);
        //     const data = res.data;
        //     const action = getListAction(data);
        //     store.dispatch(action);
        // });

        // react-thunk demo
        // const action = getTodoList();
        // store.dispatch(action);

        // react-saga demo
        const action = getMyListAction();
        store.dispatch(action);

    }

    storeChange () {
        this.setState(store.getState());
    }

    changInputValue (e) {
        console.log(e.target.value);
        const action = changeInputAction(e.target.value);
        store.dispatch(action);
    }

    submit () {
        const action = addItemAction();
        store.dispatch(action);
        console.log('click submit');
    }

    deleteItem (index) {
        const action = deleteItemAction(index);
        store.dispatch(action);
    }

    render() { 
        return ( 
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                changInputValue={this.changInputValue}
                submit={this.submit}
                deleteItem={this.deleteItem}
            />
         );
    }
}
 
export default TodoList;