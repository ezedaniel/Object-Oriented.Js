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

var userOne = new User('daniel_eze@gmail.com', 'Daniel', 'Eze', '29');
var userTwo = new User('ofoedusimon@gmail.com', 'Simon', 'Ofoedu', '30');

console.log(userOne);
userTwo.login();
