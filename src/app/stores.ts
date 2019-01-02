import { TODO_INITIAL_STATE, todoReducer, iTodos } from './todos/stores';
import { INCREMENT } from './actions';
import { tassign} from 'tassign'
import { Map } from 'immutable'
import { iRoute, ROUTE_INITIAL_STATE, routeReducer } from './routes-section/stores';
import { combineReducers } from 'redux';
export interface IAppState {
   routing: iRoute;
   tasking: iTodos;
}
export const INITIAL_STATE: IAppState = {
    routing: ROUTE_INITIAL_STATE,
    tasking: TODO_INITIAL_STATE
  
}  
export const rootReducer = combineReducers ({
   routing: routeReducer,
   tasking: todoReducer
});