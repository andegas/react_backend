import Actions from '../actionsTypes';

const INITIAL_STATE = {
    data: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case Actions.SET_DATA_IN_STORE:
        return {
            ...state,
            data: action.payload
        };
    default:
        return state;
    }
};