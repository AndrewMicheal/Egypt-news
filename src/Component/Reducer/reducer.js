
export function rootReducer(state , action){
    if(action.type === "GETNEWS"){
        return {...state , news : action.payload}
    }
    else if(action.type === "COVID"){
        return {...state , covid : action.payload}
    }
    return state;
}