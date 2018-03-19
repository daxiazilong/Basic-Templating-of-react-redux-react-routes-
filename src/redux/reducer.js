import ADD_INPUT from './action';

const initialState = {
    text:'嘿嘿',
    test:123
}

function handleInput( state = initialState ,action  ){
    switch(action.type){
        case ADD_INPUT:
            return Object.assign( {}, state,action);
        default:
            return state;
    }
    
}

export default handleInput;