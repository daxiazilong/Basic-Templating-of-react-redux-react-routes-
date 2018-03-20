import ADD_INPUT from './action';

const initialState = {
    text:'君不见黄河之水天上来，奔流到海不复回',
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