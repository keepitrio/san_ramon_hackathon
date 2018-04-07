import actions from '../actionTypes';

export function createRequest(userId, title, items, message) {
    return {
        type: actions.CREATE_REQUEST,
        userId,
        title,
        items,
        message
    };
}

export function editRequest(userId, title, items, message ) {
    return {
        type: actions.EDIT_REQUEST,
        userId,
        title,
        items,
        message
    };
}

export function fetchRequest(id) {
    return {
        type: actions.FETCH_REQUEST,
        id
    };
}

export function deleteRequest(id) {
    return {
        type: actions.DELETE_REQUEST,
        id
    }
}
