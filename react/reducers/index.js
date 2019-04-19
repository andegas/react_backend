// import {combineReducers} from 'redux';
// import dataReducer from './dataReducer';

// export default combineReducers({
//     data: dataReducer
// });

const initState = {
    data: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
    case 'GET_VIEW':
        return {...state = initState};
    case 'INPUT_VIEW_RECEIVED':
        return { ...state, inpView: action.jsonInp};
    case 'GET_VIEW_TEXTAREA':
        return {...state = initState};
    case 'TEXTAREA_VIEW_RECEIVED':
        return { ...state, txtAreaView: action.jsonTxtArea};
    case 'GET_VIEW_SELECT_OPTION':
        return {...state = initState};
    case 'SELECT_OPTION_VIEW_RECEIVED':
        return { ...state, selectOptView: action.jsonSelectOpt};
    default:
        return state;
    }
};

export default reducer;
