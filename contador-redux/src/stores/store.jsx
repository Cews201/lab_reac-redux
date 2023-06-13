import {configureStore} from '@reduxjs/toolkit'

const initialState = {
    identificacion:'',
    correo:'',
    token: '',
};

const loginReducer=(state=initialState, action)=>{
    switch (action.type){
        case "SET_IDENTIFICACION":
            return {...state, identificacion: action.payload};
        case "SET_CORREO":
            return {...state, correo: action.payload};
        case "SET_TOKEN":
            return {...state, token: action.payload};
        default:
            return state;
    }
};

const store = configureStore({
    reducer: loginReducer
});

export default store;