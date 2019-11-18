import React from 'react';
// import store from './store'
// react-redux connect: 'connect' usually used be get data
import {connect} from 'react-redux';

// class TodoList extends Component {
//     constructor (props) {
//         super (props);
//         this.state = store.getState();
//     }

//     render() { 
//         return ( <div>
//             <div><input value={this.props.inputValue} onChange={this.props.inputChange}/><button onClick={this.props.clickButton}>submit</button></div>
//             <ul>
//                 {
//                     this.props.list.map((item, index) => {
//                         return(<li key={index}>{item}</li>)
//                     })
//                 }
//             </ul>
//         </div> );
//     }
// }

const TodoList = (props) => {
    let {inputValue, inputChange, clickButton, list} = props;
    return (
    <div>
        <div><input value={inputValue} onChange={inputChange}/><button onClick={clickButton}>submit</button></div>
        <ul>
            {
                list.map((item, index) => {
                    return(<li key={index}>{item}</li>)
                })
            }
        </ul>
    </div> 
    )
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange (e) {
            console.log(e.target.value);
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action);
        },

        clickButton () {
            console.log('click button');
            let action = {
                type: 'add_item'
            }
            dispatch(action);
        }
    }
}
 
// export default TodoList;
// connect has two params , the frist one is state mapping relations, the another one is method mapping relations
export default connect(stateToProps, dispatchToProps)(TodoList);