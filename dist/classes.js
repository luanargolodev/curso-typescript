"use strict";
// public, private, readonly e protected
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    logCharDetails() {
        console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}.`);
    }
}
const luan = new UserAccount('Luan', 23);
console.log(luan);
luan.logDetails();
const argolo = new CharAccount('Argolo', 23, 'argololuan', 101);
console.log(argolo);
argolo.logDetails();
argolo.logCharDetails();
