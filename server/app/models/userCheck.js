var user = require('./user');

module.exports = {
    userValidCheck: function(client, data) {
        if(data.id == undefined || data.token == undefined) {
            throw new Error('id or token is not in data');
        }
        var usr = user.getUser(data.id);
        if(usr == undefined) {
            throw new Error('user not found');
        }
        if(usr.token != data.token) {
            throw new Error('id: ' + data.id + ' token is invalid');
        }
        user.setUserClient(data.id, client);
        return true;
    }
};