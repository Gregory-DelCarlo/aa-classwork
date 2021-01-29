import React from 'react';
import ReactDom from 'react-dom';
import {receiveTodo, receiveTodos, removeTodo} from './actions/todo_actions';
import {receiveStep, receiveSteps, removeStep} from './actions/step_actions';
import configureStore from "./store/store";


document.addEventListener("DOMContentLoaded",() => {
    const root = document.getElementById("react-root");
    const H1 = React.createElement('h1', {}, 'To Dos App');
    ReactDom.render(H1, root);

    window.receiveStep = receiveStep;
    window.receiveSteps = receiveSteps;
    window.removeStep = removeStep;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;
    window.store = configureStore();
})

