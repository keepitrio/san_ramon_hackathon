import actions from '../actionTypes';
import shortid from 'shortid';

export function createRequest(userId, title, items, message) {
    let newRequestId = shortid.generate();
    let newRequest = {
        type: actions.CREATE_REQUEST,
        newRequestId,
        userId,
        title,
        items,
        message
    };
    return newRequest;
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

export function fetchRequests() {
    return {
        type: actions.FETCH_REQUESTS
    }
}

export function deleteRequest(id) {
    return {
        type: actions.DELETE_REQUEST,
        id
    }
}
