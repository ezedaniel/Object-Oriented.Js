/* as per user created on the object literal script herein */

class User {
    constructor(email, firstName,lastName, age){
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'Welcome');
        return this
    }
    logout(){
        console.log(this.email, 'Bye');
        return this
    }
    updatescore(){
        this.score ++;
        console.log (this.email, 'your score is', this.score);
        return this
    }
};

/* To create an admin that would have some special features that other users cant have, rather than making a new class for the
admin and adding all same methods of a user but including the specail ability.

its best to create a class that inherits the user method


*/

class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email
        });
    }
}

var userOne = new User('daniel_eze@gmail.com', 'Daniel', 'Eze', '29');
var userTwo = new User('ofoedusimon@gmail.com', 'Simon', 'Ofoedu', '30');
var admin = new Admin('tucker@yahoo.com', 'Tucker', 'Daniel', '33');

var users = [userOne, userTwo, admin];

// admin.deleteUser(userTwo);
userTwo.deleteUser(userOne); // won't work

console.log(users);
