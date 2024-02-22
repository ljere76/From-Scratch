const obj = {
  // key: value
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
  language: "English",

  direBonjour() {
    console.log(
      "Bonjour, je suis " + this.name + " et j'ai " + this.age + " ans."
    );
  },
};

// obj.direBonjour();

//construire des objets
function User(name, age) {
  this.name = name;
  this.age = age;

  this.getAge = function () {
    console.log(this.name + " a " + this.age + " ans");
  };
}

const user1 = new User("John", 30);
const user2 = new User("Jane", 25);

user1.getAge();
user2.getAge();

// factory functions
function UserFactory(name, age) {
  return {
    name: name,
    age: age,
    getAge: function () {
      console.log(this.name + " a " + this.age + " ans");
    },
  };
}

const user3 = UserFactory("John", 30);
const user4 = UserFactory("Jane", 25);

user3.getAge();
user4.getAge();

// class

class UserClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getAge() {
    console.log(this.name + " a " + this.age + " ans");
  }
}

const user5 = new UserClass("John", 30);
const user6 = new UserClass("Jane", 25);

user5.getAge();
user6.getAge();
