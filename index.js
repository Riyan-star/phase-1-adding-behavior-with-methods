// Your code here
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says meow!`;
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says woof!`;
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    if (this.sex === "male") {
      return `It's me! ${this.name}, the parrot!`;
    } else {
      return `${this.name} says squawk!`;
    }
  }
}
const cat1 = new Cat("Whiskers", "female");
console.log(cat1.speak()); // "Whiskers says meow!"

const dog1 = new Dog("Rex", "male");
console.log(dog1.speak()); // "Rex says woof!"

const bird1 = new Bird("Polly", "male");
console.log(bird1.speak()); // "It's me! Polly, the parrot!"

const bird2 = new Bird("Kiwi", "female");
console.log(bird2.speak()); // "Kiwi says squawk!"
