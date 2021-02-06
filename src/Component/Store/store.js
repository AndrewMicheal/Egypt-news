import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "../Reducer/reducer";
let middleWares = [thunk];

let initState = {
    news : [] , 
    covid : []
}

let store = createStore(rootReducer , initState , applyMiddleware(...middleWares));

export default store;