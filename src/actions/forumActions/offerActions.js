export const FETCH_OFFERS = "fetch_requests";
export const FETCH_OFFER = "fetch_post";
export const CREATE_OFFER = "create_request";
export const EDIT_OFFER = "edit_request";
export const DELETE_OFFER = "delete_request";

export function fetchRequests() {
    return {
        type: FETCH_OFFERS
    };
}

export function createRequest(userId, title, message) {
    return {
        type: CREATE_OFFER,
        userId,
        title,
        message
    };
}

export function editRequest(userId, title, message ) {
    return {
        type: EDIT_OFFER,
        userId,
        title,
        message
    };
}

export function fetchRequest(id) {
    return {
        type: FETCH_OFFER,
        id
    };
}

export function deleteRequest(id) {
    return {
        type: DELETE_OFFER,
        id
    }
}
