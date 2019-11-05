import React, { Component } from 'react';
import {CSSTransition } from 'react-transition-group';

class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    }
    this.toToggle = this.toToggle.bind(this);
  }

  toToggle() {
    this.setState({
      isShow: this.state.isShow ? false : true
    });
  }

  render() { 
    return ( 
      <div>
        <CSSTransition 
            in={this.state.isShow}   //用于判断是否出现的状态
            timeout={2000}           //动画持续时间
            classNames="boss-text"   //className值，防止重复
            unmountOnExit
        >
          <p>BOSS-superman</p>
        </CSSTransition>
        <p><button onClick={this.toToggle}>call boss</button></p>
      </div>
     );
  }
}
 
export default Boss;