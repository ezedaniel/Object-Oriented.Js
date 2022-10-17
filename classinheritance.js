




class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email
        });
    }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var admin = new Admin('shaun@ninjas.com', 'Shaun');

var users = [userOne, userTwo, admin];

// admin.deleteUser(userTwo);
userTwo.deleteUser(userOne); // won't work

console.log(users);
