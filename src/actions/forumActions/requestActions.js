import actions from '../actionTypes';

export function fetchRequests() {
    return {
        type: actions.FETCH_REQUESTS
    };
}

export function createRequest(userId, title, message) {
    return {
        type: actions.CREATE_REQUEST,
        userId,
        title,
        message
    };
}

export function editRequest(userId, title, message ) {
    return {
        type: actions.EDIT_REQUEST,
        userId,
        title,
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
