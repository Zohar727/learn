import React from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';

// 无状态组件
const TodoListUI = (props) => {
        return (
            <div>
                <div>
                    <Input placeholder='input something' style={{width:'250px'}} onChange={props.changInputValue} value={props.inputValue}/>
                    <Button type="primary" onClick={props.submit}>Add</Button>
                </div>
                <div>
                    <List 
                        bordered
                        dataSource={props.list}
                        renderItem={(item, index) => (
                            <List.Item onClick={() => props.deleteItem(index)}>{item}</List.Item>
                        )}
                    />
                </div>
            </div>            
          );
}
 
export default TodoListUI;