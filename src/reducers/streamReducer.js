import {
    CREATE_STREAM,
    EDIT_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM}from "../actions/types"

const streamReducer = (state={},action) => {
    switch(action.type){
        case EDIT_STREAM:
            return {...state, [action.payload.id]:action.payload}
        case CREATE_STREAM:
            return {...state, [action.payload.id]:action.payload}
        case FETCH_STREAM:
            return {...state, [action.payload.id]:action.payload}
        case FETCH_STREAMS:
            return {...state}
        case DELETE_STREAM:
            return state.filter(({id}) => id !== action.payload)
        default:
            return state
    }
}

export default streamReducer