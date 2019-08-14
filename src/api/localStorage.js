const localStorageMiddleWare = store => next => action => {
    if (action.type === 'setList') {
        let previousJokes = localStorage.getItem('jokes');
        previousJokes = JSON.parse(previousJokes) || [];

        store.dispatch({
            type: 'setListInit',
            data: previousJokes,
        });
    }
    if (action.type === 'addJoke_async_success') {
        const { joke } = action.data;
        let previousJokes = localStorage.getItem('jokes');

        previousJokes = JSON.parse(previousJokes) || [];
        previousJokes.push(joke);

        localStorage.setItem('jokes', JSON.stringify(previousJokes));
    }
    next(action);
};

export default localStorageMiddleWare;
