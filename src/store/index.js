import { combineReducers } from 'redux';

const initialState = {
    data: {
        list: [],
    },
    status: 'init'
};

function changeData(state = initialState.data, action) {
    switch (action.type) {
        case 'addJoke_async_success':
            const newList = state.list.slice();
            newList.push(action.data.joke);
            return { ...state, list: newList };

        case 'addJoke_async_failed':
            return state;

        case 'setListInit':
            return { ...state, list: action.data };
    }
    return state;
}

function changeStatus(state = initialState.status, action) {
    switch (action.type) {
        case 'status_fetching':
            return "fetching";
        case 'status_success':
            return 'success';
        case 'status_error':
            return 'error';
    }
    return state;
}

export default combineReducers({
    data: changeData,
    status: changeStatus,
})

window.store = initialState;

