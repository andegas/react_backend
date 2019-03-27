exports.init = function(data){
    this.rawData = data;
};
exports.getFirstUser = function(){
    return this.rawData.users[0];
};

exports.getUsers = function(){
    return this.rawData.users;
    // return this.mapIntoObject(this.rawData.users);
};

exports.getPoints = function(){
    return this.rawData.points;
    // return this.mapIntoObject(this.rawData.points);
};
