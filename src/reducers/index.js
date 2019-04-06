const initState = {
    data: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
    case 'GET_NEWS':
        return {...state, loading: true};
    case 'NEWS_RECEIVED':
        return { ...state, news: action.json[0], loading: false };
    default:
        return state;
    }
};
export default reducer;