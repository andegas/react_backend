import Actions from '../actionsTypes';

const initState = {
    data: []
};

export default  (state = initState, action) => {
    switch (action.type) {
    case Actions.GET_VIEW:
        return {...state = initState};
    case Actions.INPUT_VIEW_RECEIVED:
        return { ...state, inpView: action.jsonInp};
    case Actions.GET_VIEW_TEXTAREA:
        return {...state = initState};
    case Actions.TEXTAREA_VIEW_RECEIVED:
        return { ...state, txtAreaView: action.jsonTxtArea};
    case Actions.GET_VIEW_SELECT_OPTION:
        return {...state = initState};
    case Actions.SELECT_OPTION_VIEW_RECEIVED:
        return { ...state, selectOptView: action.jsonSelectOpt};
    default:
        return state;
    }
};