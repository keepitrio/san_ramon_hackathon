import actions from '../actionTypes';

export function createRequest(userId, title, items,message) {
    return {
        type: actions.actions.CREATE_OFFER,
        userId,
        title,
        items,
        message
    };
}

export function editRequest(userId, title, items, message ) {
    return {
        type: actions.EDIT_OFFER,
        userId,
        title,
        items,
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
