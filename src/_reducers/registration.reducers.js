import { userConstants } from '../_constants';

export function registration(state = {}, action) {
    switch(action.type) {
        case userConstants.REGISTER_REQUEST:
            return {registering: true}
            break;
        case userConstants.REGISTER_SUCCESS:
            return {};
            break;
        case userConstants.REGISTER_FAILURE:
            return {};
            break;
        default:
            return state;
            break;
    }
}
