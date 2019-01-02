import { ADD_ROUTE, REMOVE_ROUTE, CLEAR_ROUTE } from './actions';
import { tassign } from 'tassign';

export interface iRouteMember {
    id: string;
    path: string;
    component: string;
}
export interface iRoute {
    routes: iRouteMember[]
    lastUpdate: Date;
}
export const ROUTE_INITIAL_STATE: iRoute = {
    routes: [],
    lastUpdate: null
}

function AddTodo(state, action) {
    var newRoute: iRouteMember = {
        id: state.routes.length + 1,
        path: action.path,
        component: action.component
    }
    return tassign(state, {
        routes: state.routes.concat(newRoute),
        lastUpdate: new Date()
    })
}
function RemoveTodo(state, action) {
    return tassign(state,{
        routes: state.routes.filter(t=>t.id !=action.id),
        lastUpdate: new Date()
    })
}
function ClearTodo(state, action) {
    return tassign(state,{
        routes: [],
        lastUpdate: new Date()
    })
}


export function routeReducer(state: iRoute = ROUTE_INITIAL_STATE, action): iRoute {
    switch (action.type) {
        case ADD_ROUTE: return AddTodo(state, action);
        case REMOVE_ROUTE: return RemoveTodo(state, action);
        case CLEAR_ROUTE: return ClearTodo(state, action);
    }
    return state
}