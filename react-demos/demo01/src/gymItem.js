import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GymItem extends Component {
  constructor(props) {
    super(props);
    this.hanleClick = this.hanleClick.bind(this);
  }

  hanleClick() {
    this.props.deleteItem(this.props.index);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }

  render() { 
    console.log('child-render');
    return ( 
      <li onClick={this.hanleClick}>{this.props.content}</li>
     );
  }
}

GymItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}
 
export default GymItem;