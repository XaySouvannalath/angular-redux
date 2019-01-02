import { POST_POST, GET_POST } from './actions';
export interface iPost{
   posts: any[];
   lastUpdate: Date;
}
export interface iPostData{
    userID: string;
    id: string;
    title: string;
    body: string;
}
export const POST_INITIAL_STATE: iPost = {
    lastUpdate: null,
    posts: []
}
function post(state, action){
    return null
}
function put(state, action){

}
function del(state, action){

}
function get(state, action){
    var newItems = 
    return null
}
export function postReducer(state: iPost = POST_INITIAL_STATE, action): iPost{
    switch(action.type){
        case POST_POST: return post(state, action);
        case GET_POST: return get(state, action);
    }
    return state
}