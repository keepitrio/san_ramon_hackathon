export const FETCH_REQUESTS = "fetch_requests";
export const FETCH_REQUEST = "fetch_post";
export const CREATE_REQUEST = "create_request";
export const EDIT_REQUEST = "edit_request";
export const DELETE_REQUEST = "delete_request";

export function fetchRequests() {
    return {
        type: FETCH_REQUESTS
    };
}

export function createRequest(userId, title, message) {
    return {
        type: CREATE_REQUEST,
        userId,
        title,
        message
    };
}

export function editRequest(userId, title, message ) {
    return {
        type: EDIT_REQUEST,
        userId,
        title,
        message
    };
}

export function fetchRequest(id) {
    return {
        type: FETCH_REQUEST,
        id
    };
}

export function deleteRequest(id) {
    return {
        type: DELETE_REQUEST,
        id
    }
}
