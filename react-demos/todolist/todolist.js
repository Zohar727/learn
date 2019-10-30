
class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let lis = [];
    this.props.list.forEach((item) => {
      lis.push(
        <li>{item}</li>
      );
    });
    return (
      <ul>
        {lis}
      </ul>
    )
  }
}

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e) {
    if (e.keyCode == 13) {
      // 监听回车事件
      this.props.onChangeInput(e.target.value);
    }
  }

  render() {
    return (
      <input type="text" placeholder="please input" value={this.props.inputText} onKeyUp={this.handleKeyUp}/>
    );
  }

}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      list: []
    };
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onChangeInput(text) {
    // todo
    List.push(text);
    this.setState({
      list: List
    });
  }

  render() {
    return (
      <div>
        <h3>React-TodoList</h3>
        <InputBar onChangeInput={this.onChangeInput}/>
        <ItemList list={this.state.list}/>
      </div>
    );
  }
}

ReactDOM.render(
  <TodoList />,
  document.getElementById('container-todo')
)

var  List = [];