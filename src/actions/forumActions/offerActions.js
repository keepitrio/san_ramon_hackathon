import actions from '../actionTypes';

export function createOffer(userId, title, items,message) {
    let newOfferId = shortid.generate();
    let newOffer = {
        type: actions.actions.CREATE_OFFER,
        newOfferId,
        userId,
        title,
        items,
        message
    }
    return newOffer;
}

export function editOffer(userId, title, items, message ) {
    return {
        type: actions.EDIT_OFFER,
        userId,
        title,
        items,
        message
    };
}

export function fetchOffers() {
    return {
        type: actions.FETCH_OFFERS
    }
}


export function fetchOffer(id) {
    return {
        type: actions.FETCH_OFFER,
        id
    };
}

export function deleteOffer(id) {
    return {
        type: actions.DELETE_OFFER,
        id
    }
}
