import React from 'react';
import ReactDom from 'react-dom';
// import App from "./components/app"
// import {receiveTodo, receiveTodos, removeTodo} from './actions/todo_actions';
// import {receiveStep, receiveSteps, removeStep} from './actions/step_actions';
import configureStore from "./store/store";
import Root from "./components/root"
import { allTodos } from './reducers/selectors'

document.addEventListener("DOMContentLoaded",() => {
    const root = document.getElementById("react-root");
    // const H1 = React.createElement('h1', {}, 'To Dos App');
    window.store = configureStore();


    ReactDom.render(<Root store={window.store}/>, root);


    // testing
    window.allTodos = allTodos;
    // window.receiveStep = receiveStep;
    // window.receiveSteps = receiveSteps;
    // window.removeStep = removeStep;
    // window.receiveTodo = receiveTodo;
    // window.receiveTodos = receiveTodos;
    // window.removeTodo = removeTodo;
})

