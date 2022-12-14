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

/* 
when you heave multiple users with same properties that 
requires the same method use the class function on JS 
- the 'new' keyword
- create a new empty object {}
- set the value of this to be the new empty object 
- call the constructor method

*/

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

var userOne = new User('daniel_eze@gmail.com', 'Daniel', 'Eze', '29');
var userTwo = new User('ofoedusimon@gmail.com', 'Simon', 'Ofoedu', '30');

userOne.login();
userTwo.logout();

userOne.login().updatescore().logout();
userTwo.login().updatescore().logout();


