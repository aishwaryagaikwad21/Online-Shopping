//request to backend
import {GET_ITEMS,ADD_ITEMS,DELETE_ITEMS} from './types';

export const getItems = ()=>{
    return{
        type:GET_ITEMS, //this is action
        
    }
}

export const deleteItems = (id)=>{
    return{
        type:DELETE_ITEMS, //this is action
        payload:id
    }
}

export const addItem = (item)=>{
    return{
        type:ADD_ITEMS, //this is action
        payload:item
    }
}