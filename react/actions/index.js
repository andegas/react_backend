export * from './setDataStore';
export * from './getData';

export const getView =()=>({
    type:'GET_VIEW',
});

export const getViewTxtArea =()=>({
    type:'GET_VIEW_TEXTAREA',
});

export const getViewSelectOpt =()=>({
    type:'GET_VIEW_SELECT_OPTION',
});

export const getListData =(actionType)=>({
    type:'GET_LIST_DATA',
    actionType
});
