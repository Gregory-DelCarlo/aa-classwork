import React from 'react';
// export default () => {
//     return <h3>Todo List goes here!</h3>
// }
import TodoListItem from './todo_list_item'


export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const todos = this.props.todos.map(todo => {
            <TodoListItem todo={todo}/>
            });
        
        return(
            <ul className="to-do-list">
               {todos}     
            </ul>
            
        );
    }
}