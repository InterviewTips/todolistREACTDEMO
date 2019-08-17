import React from 'react';

class TodoItem extends React.Component {

    constructor(props){
        super(props);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    render(){
        const {content} = this.props;
        return(
            <div onClick={this.handleDeleteItem}>
                {content}
            </div>
        )
    }

    handleDeleteItem(){
        const {index} = this.props;
        this.props.delete(index);
    }
}

export default TodoItem;