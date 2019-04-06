class StateApi {
    constructor(rawData) {
        this.data = {
            users: rawData.users,
            points: rawData.points,
        };
        this.subscriptions = {};
        this.lastSubscriptionId = 0;
    }
    getPoints = () => {
        return this.data.points;
    };
    getUsers = () => {
        return this.data.users;
    };
    lookupPoints = userId => {
        return this.data.points.filter(point => point.userId == userId);
    };
    setSearchTerm = searchTerm => {
        this.mergeWithState({
            searchTerm,
        });
    };
    mergeWithState = stateChange => {
        this.data = {
            ...this.data,
            ...stateChange,
        };
    };

    subscribe = (cb)=>{
        this.lastSubscriptionId++;
        this.subscriptions[this.lastSubscriptionId] = cb;
    };
    unsubscribe = ()=>{};
    notify = ()=>{
        Object.values(this.subscriptions).forEach(cb => cb());
    };
    lookupMyClick = userId => {
        delete this.data.users[userId];
        this.notify();
    };
    doSearch = searchValue => {
        this.data = {
            ...this.data,
            searchValue,
        };
        this.notify();

    };
}

export default StateApi;
