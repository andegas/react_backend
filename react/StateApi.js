class StateApi {
    constructor(rawData) {
        this.data = {
            users: rawData.users,
            points: rawData.points,
        };
    }
    getPoints = () => {
        return this.data.points;
    }
    getUsers = () => {
        return this.data.users;
    }
}

export default StateApi;
