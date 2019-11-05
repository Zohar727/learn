import React, {Component, Fragment} from 'react';
import {CSSTransition , TransitionGroup} from 'react-transition-group'
import GymItem from './gymItem';
import Boss from './boss';
import axios from 'axios';

class Gym extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.inputChange = this.inputChange.bind(this);
    this.addList = this.addList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    axios.get('https://easy-mock.bookset.io/mock/5da922580e8b45138e6ccd63/gym/list')
    .then((res)=>{
      this.setState({
        list: res.data.list
      })
    })
    .catch((error)=>{console.log('axios 获取数据失败'+error)})
  }

  inputChange (e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  addList () {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    });
  }

  deleteItem (index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="project">Add Projects</label>
          <input value={this.state.inputValue} onChange={this.inputChange} id="project"/>
          <button onClick={this.addList}>add project</button>
          </div>
        <ul>
          <TransitionGroup>
            {
              this.state.list.map((item, index) => {
                return (
                  <CSSTransition
                    timeout={1000}
                    classNames='boss-text'
                    unmountOnExit
                    appear={true}
                    key={index+item}
                  >
                    <GymItem 
                    content={item}
                    key={index+item}
                    deleteItem={this.deleteItem}
                    index={index}
                    />
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>
        </ul>
        <Boss />
      </Fragment>
    )
  }
}

export default Gym;