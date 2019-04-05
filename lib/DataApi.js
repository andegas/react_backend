exports.init = function(data){
    this.rawData = data;
};
exports.getFirstUser = function(){
    return this.rawData.users[0];
};

exports.getAllData = function(){
    return this.rawData;
};

exports.getUsers = function(){
    return this.rawData.users;
};

exports.getPoints = function(){
    return this.rawData.points;
};

exports.getUser = function(id){
    console.log('DataAPI user id:' + id);
    var singleUser = this.rawData.users.filter(user=> user.id == id);
    return singleUser;
};

exports.getPoint = function(id){
    console.log('DataAPI point id:' + id);
    var singlePoint = this.rawData.points.filter(point=> point.id == id);
    return singlePoint;
};


exports.getUserPoint = function(id){
    console.log('DataAPI user points id:' + id);
    var userPoints = this.rawData.points.filter(point=> point.userId == id);
    return userPoints;
};
