import { combineReducers } from 'redux'

const userInfo = (state = [],action) => {
    switch(action.type){
        case 'UPDATE_USERINFO':
            return action.value
    
         default: return state}
}

const logStatus = (state = [],action) => {
    switch(action.type){
        case 'UPDATE_STATUS':
            return action.value
    
         default: return state}
}


const listings = (state = [],action) => {
    switch(action.type){
        case 'UPDATE_LIST':
            return [...state, action.value]

            case 'DELETE_LISTING' :
                const newState = [...state]
                newState.splice (action.value,1);
                return newState;
    
         default: return state}
}


const map = (state = [],action) => {
    switch(action.type){
        case 'UPDATE_MAP':
            return action.value
    
         default: return state}
}




export default combineReducers({ userInfo,listings,map,logStatus})