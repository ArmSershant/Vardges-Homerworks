// Using the constructor function, create an object and methods to support the following functionality
function ProfileInfo(){
    this.userName;
    this.email;
    this.address;
    this.setUsername = function(userName){
        this.userName = userName;
    }
    this.getUsername = function(){
        console.log(this.userName);
    }
    this.setEmail = function(email){
        this.email = email;
    }
    this.getEmail = function(){
        console.log(this.email);
    }
    this.setAddress = function(address){
        this.address = address;
    }
    this.getAddress = function(){
        console.log(this.address);
    }
}
function User(){
    this.setName = function(name){
        this.name = name;
    }
    this.getName = function(){
        console.log(this.name);
    }
    this.setAge = function(age){
        this.age = age;
    }
    this.getAge = function(){
        console.log(this.age);
    }
    this.setProfileInfo = function(ProfileInfo){
        this.ProfileInfo = ProfileInfo;
    }
    this.getProfileInfo = function(){
        this.ProfileInfo.getUsername();
        this.ProfileInfo.getEmail();
        this.ProfileInfo.getAddress();
    }
}
const profileInfo = new ProfileInfo();
profileInfo.setUsername("John's username");
profileInfo.setEmail('John@example.com');
profileInfo.setAddress("John's address");
const user = new User();
user.setName('John');
user.getName();
user.setAge(63);
user.getAge();
user.setProfileInfo(profileInfo);
user.getProfileInfo();