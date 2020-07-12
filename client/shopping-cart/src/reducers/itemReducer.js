import { v1 as uuid } from "uuid";
import {GET_ITEMS,ADD_ITEMS,DELETE_ITEMS} from '../actions/types'
const initialState = {
    items: [
        { id: uuid(), name: 'Eggs' },
        { id: uuid(), name: 'bread' },
        { id: uuid(), name: 'milk' },
        { id: uuid(), name: 'candy' }
    ]
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state
            }
            default:
                return state;
    }
}