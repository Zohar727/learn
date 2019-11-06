import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import store from './store'

// const data = [
//     'to finish month report',
//     'daily meeting',
//     'do some excrise',
//     'buy some fruit'
// ]

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.submit = this.submit.bind(this);
        // this.deleteItem = this.deleteItem.bind(this);
        this.changInputValue = this.changInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange); // 订阅redux状态
        console.log(this.state);
    }

    storeChange () {
        this.setState(store.getState());
    }

    changInputValue (e) {
        console.log(e.target.value);
        const action = {
            type: 'changeInput',
            value: e.target.value
        }
        store.dispatch(action);
    }

    submit () {
        const action = {
            type: 'addItem'
        }
        store.dispatch(action);
        console.log('click submit');
    }

    deleteItem (index) {
        const action = {
            type: 'delItem',
            index: index
        }
        store.dispatch(action);
    }

    render() { 
        return ( 
            <div>
                <div>
                    <Input placeholder={this.state.inputValue} style={{width:'250px'}} onChange={this.changInputValue}/>
                    <Button type="primary" onClick={this.submit}>Add</Button>
                </div>
                <div>
                    <List 
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (
                            <List.Item onClick={this.deleteItem(index).bind(this)}>{item}</List.Item>
                        )}
                    />
                </div>
            </div>
         );
    }
}
 
export default TodoList;