import gameService from './../../shared/services/gameService';

const ADD_GAME = 'ADD_GAME';

const ACTION_HANDLERS = {
};

export function addUser(name) {
    return async dispatch => {
        const doc = await gameService.fetchUserByName(name);
        if (!doc.exists) {
            await gameService.addUser(name);
            dispatch({type: ADD_GAME})
        }else {
            throw '등록된 게임입니다.';
        }
    }
}

export default (state = {auth: null}, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
