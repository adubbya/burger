// import
var orm = require("../config/orm.js");

// ORM function
var burger = {
    selectAll: function(cb) {
        orm.SelectAll("boiga_name", function (res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.selectAll("boiga_name", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, cndition, cb) {
        orm.UpdateOne("boiga_name", objColVals, condition, function(res) {
            cb(res);
        });
    }
};
module.exports = burger;