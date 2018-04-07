import actions from '../actionTypes';

export function fetchRequests() {
    return {
        type: actions.FETCH_OFFERS
    };
}

export function createRequest(userId, title, message) {
    return {
        type: actions.actions.CREATE_OFFER,
        userId,
        title,
        message
    };
}

export function editRequest(userId, title, message ) {
    return {
        type: actions.EDIT_OFFER,
        userId,
        title,
        message
    };
}

export function fetchRequest(id) {
    return {
        type: actions.FETCH_OFFER,
        id
    };
}

export function deleteRequest(id) {
    return {
        type: actions.DELETE_OFFER,
        id
    }
}
