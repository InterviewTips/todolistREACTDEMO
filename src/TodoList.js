import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: '',
    }

    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }
  render() {
    return (
      <React.Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange} />
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </React.Fragment>
    );
  }

  // getTodoItem
  getTodoItem() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            delete={this.handleDelete}
            key={index}
            content={item}
            index={index}
          />
        );
      })
    )
  }

  // 传递给子组件的方法
  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

  // 处理点击
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    })
  }
  // 处理输入框变动 
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
}

export default TodoList;
