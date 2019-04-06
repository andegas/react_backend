class StateApi {
    constructor(rawData) {
        this.data = {
            users: rawData.users,
            points: rawData.points,
        };
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
    setSearchTerm = searchTerm => {debugger;
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
}

export default StateApi;
