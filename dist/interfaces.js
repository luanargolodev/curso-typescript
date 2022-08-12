"use strict";
const tlou = {
    title: 'The Last of US',
    description: 'The best game in the world',
    genre: 'Action',
    getSimilar: (title) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale and Metro`);
    },
    price: 50.00
};
console.log(tlou);
const leftbehind = {
    title: 'The Last of US - Left Behind',
    description: 'You play as Ellie before the original game',
    genre: 'Action',
    platform: ['PS4'],
    getSimilar: (title) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale and Metro`);
    },
    price: 30.00,
    originalGame: tlou,
    newContent: ['3 hours story', 'new characters', 'new weapons', 'new adventures']
};
console.log(leftbehind);
class CreateGame {
    constructor(title, description, genre, platform, price, getSimilar) {
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.price = price;
        this.platform = platform;
        this.getSimilar = getSimilar;
    }
}
console.log(CreateGame);
