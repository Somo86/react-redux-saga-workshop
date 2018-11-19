export const GET_COLOR_LIST = 'GET_COLOR_LIST';

export const getColorListAction = (colors) => ({
    type: GET_COLOR_LIST,
    payload: colors,
});
