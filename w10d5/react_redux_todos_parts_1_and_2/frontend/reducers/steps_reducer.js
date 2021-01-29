import {REMOVE_STEP, RECEIVE_STEP, RECEIVE_STEPS} from '../actions/step_actions'

const initialState = {
    1: { // this is the step with id = 1
      id: 1,
      title: 'walk to store',
      done: false,
      todo_id: 1
    },
    2: { // this is the step with id = 2
      id: 2,
      title: 'buy soap',
      done: false,
      todo_id: 1
    }
}


const stepsReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_STEP:
            nextState[action.step.id] = action.step;
            return nextState
        case RECEIVE_STEPS:
            action.steps.forEach( (step) => {
                nextState[step.id] = step;
            });

            return nextState;
        case REMOVE_STEP:
            delete nextState[action.step.id];
            
            return nextState;
        default:
            return oldState;
    }
}

export default stepsReducer;