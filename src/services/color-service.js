import Utils from '../utils/functionalUtils';
import colorsResponse from './material-colors'

function fetch() {
    return Utils.delayExecution(colorsResponse);
}

function get() {
    return colorsResponse;
}

function getBy(filter) {
    return colorsResponse[filter];
}

export default {
    fetch,
    get,
    getBy,
}
