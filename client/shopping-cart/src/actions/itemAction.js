//request to backend
import axios from 'axios';
import {GET_ITEMS,ADD_ITEMS,DELETE_ITEMS,ITEMS_LOADING} from './types';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/')
        .then(res => dispatch({
            type:GET_ITEMS,
            payload:res.data
        }))
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

export const setItemsLoading = ()=>{
    return{
        type:ITEMS_LOADING
    }
}