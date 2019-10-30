import React, { Component } from 'react';

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
      isShow: this.state.isShow ? 'false': true
    });
  }

  render() { 
    return ( 
      <div>
        <p className={this.state.isShow ? 'show' : 'hide'}>BOSS-superman</p>
        <p><button onClick={this.toToggle}>call boss</button></p>
      </div>
     );
  }
}
 
export default Boss;