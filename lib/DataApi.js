class DataApi {
    constructor(rawData){
        this.rawData = rawData;
    }
    // mapIntoObject(arr){
    //     return arr.reduce((acc, curr) => {
    //         acc[curr.id] = curr;
    //         return acc;
    //     }, {});
    // }
    getFirstUser() {
        return this.rawData.users[0];
    }

    getUsers() {
        return this.rawData.users;
        // return this.mapIntoObject(this.rawData.users);
    }

    getPoints(){
        return this.rawData.points;
        // return this.mapIntoObject(this.rawData.points);
    }
}
export default DataApi;