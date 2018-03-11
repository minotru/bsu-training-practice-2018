export default class Store {
    constructor(reducer, initialState = {}) {
        this.reducer = reducer;
        this.state = initialState;
        this.listeners = [];
    }

    getState() {
        return this.state;
    }

    dispatch(action) {
        this.state = this.reducer(this.state, action);
        this.listeners.forEach(listener => listener());
    }

    subscribe(listener) {
        this.listeners.push(listener);
        return function unsubscribe() {
            const ind = this.listeners.indexOf(listener);
            if (ind !== -1)
                this.listeners.splice(ind, 1);
        }
    }

    replaceReducer(nextReducer) {
        this.reducer = nextReducer;
    }
}