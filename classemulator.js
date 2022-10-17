function User(email, firstName,lastName, age){
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in');
    };
}


User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
};

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
};


var userOne = new User('daniel_eze@gmail.com', 'Daniel', 'Eze', '29');
var userTwo = new User('ofoedusimon@gmail.com', 'Simon', 'Ofoedu', '30');

console.log(userOne);
userTwo.login();
