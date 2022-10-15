/*this creates the initial object literals an enables the user to login and log out*/
var userOne = {
    email: 'daniel_eze@gmail.com',
    firstName: 'Daniel',
    lastName: 'Eze',
    login(){
        console.log(this.email, 'Welcome');
    },
    logout(){
        console.log(this.email, 'Bye');
    }
};

userOne.login();
userOne.logout();

/* to edit the above properties in the object above*/
userOne.firstName = 'David';
/* Orr*/
userOne['firstName'] = 'Simon';

/* to add to the above properties and methods in the object above*/      
userOne.age = 29
userOne.profilePic = function(){
        console.log(userOne.email, 'heres your profile pic');
        };

/* when you heave multiple users with same properties that 
requires the same method use the class function on JS */
class User: {



};
