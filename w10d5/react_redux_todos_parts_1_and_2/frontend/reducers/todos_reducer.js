import {REMOVE_TODO, RECEIVE_TODO, RECEIVE_TODOS} from '../actions/todo_actions';
const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
      },
      2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
      }
}
const todosReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_TODOS:
            // const newTodos = {};
            action.todos.forEach((todo, idx) => {
                // newTodos[idx] = todo;
                nextState[idx] = todo;
            })
            // debugger
            // nextState[todos] = newTodos;
            return nextState;

        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo;

            return nextState;

        case REMOVE_TODO:
            delete nextState[action.todo.id];

            return nextState;

        default:
            return oldState;
    }

}

export default todosReducer;