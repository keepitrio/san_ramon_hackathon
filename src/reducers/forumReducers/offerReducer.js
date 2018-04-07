import actionTypes from '../actions/actionTypes'
import shortid from 'shortid';

export default function(state = {}, action) {
    const { offerId, userId, title, items, message } = action;

    if(action.type === actionTypes.CREATE_OFFER) {
        let newOfferId = shortid.generate();
        return state.offers.concat({ newOfferId, userId, title, items, message });
    }

    if(action.type === actionTypes.EDIT_OFFER) {
        return Object.assign({}, state, {
            offers: state.offers.map(offer => offer.id === offerId ? Object.assign({}, offer, { title, items, message}) : offer)
        });
    }

    if(action.type === actionTypes.DELETE_OFFER) {
        return state.filter(offer => offer.id !== offerId)
    }

    return state;
}
