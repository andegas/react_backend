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
export const keepDataInForm = (data)=>({
    type: 'KEEP_DATA_IN_FORM',
    data: data
});
export const selectElement = (data)=>({
    type: 'SELECT_ELEMENT',
    data: data
});
export const getListData =(actionType)=>({
    type:'GET_LIST_DATA',
    actionType
});
export const getElementData =(data)=>({
    type:'GET_ELEMENT_DATA',
    element: data
});
