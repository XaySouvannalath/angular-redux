import { ADD_TODO } from './actions';
import { tassign } from 'tassign';
export interface iTodoData {
    task: string;
    done: boolean;
    id: string;
}
export interface iTodos {
    lastUpdate: Date;
    todos:any[];
}
export const TODO_INITIAL_STATE: iTodos = {
    lastUpdate: null,
    todos: []
}

function post(state, action) {
    var newItem: iTodoData = {
        id: state.length + 1,
        task: action.task,
        done: action.done
    }


    return tassign(state, {
        todos: state.todos.concat(newItem),
        lastUpdate: new Date()
    })
}

function put(state, action) {

}
function del(state, action){

}
export function todoReducer(state: iTodos = TODO_INITIAL_STATE, action): iTodos {
    switch (action.type) {
        case ADD_TODO: return post(state, action)
    }
    return state
}