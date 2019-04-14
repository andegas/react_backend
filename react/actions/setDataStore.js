import Actions from '../actionsTypes';

const setDataStore = (data)=>{
    return {
        type: Actions.SET_DATA_IN_STORE,
        payload: data
    };
};

export {setDataStore};