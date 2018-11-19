export const FETCH_COLOR_LIST = 'FETCH_COLOR_LIST';
export const FETCH_COLOR_LIST_SUCCESS = 'FETCH_COLOR_LIST_SUCCESS';

export const getColorListAction = () => ({
    type: FETCH_COLOR_LIST,
    payload: {},
});

export const getColorListSuccess = (response) => ({
    type: FETCH_COLOR_LIST_SUCCESS,
    payload: response,
});
