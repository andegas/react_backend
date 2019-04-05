class StateApi {
    constructor(rawData) {
        this.data = {
            users: this.mapIntoObject(rawData.users),
            points: this.mapIntoObject(rawData.points),
        };
    }
    mapIntoObject(arr) {
        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {});
    }
    getState = () => {
        return this.data;
    }
}

export default StateApi;
