"use strict";
// boolean (true / false)
let isOpen;
// string ('foo', "foo", `foo`)
let message;
message = 'foo';
message = "foo";
message = `foo`;
// number (int, float, hex, binary)
let total;
total = 20;
total = 20.3;
total = 0xff0; // hexadecimal
// array (type[])
let items; // um array e dentro desse array varios numeros
items = [1, 2, 3];
let items2; // um array e dentro desse array varios strings
items2 = ['foo', 'bar'];
let items3;
items3 = [1, 2, 3];
// tuple
let title;
title = [1, 'foo', 'bar'];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
    Colors["red"] = "#f00";
    Colors["green"] = "#0f0";
    Colors["blue"] = "#00f";
})(Colors || (Colors = {}));
// any (qualquer coisa) => NAO E LEGAL!
let coisa;
coisa = true;
coisa = 'foo';
coisa = [];
coisa = {};
coisa = 1;
coisa = null;
coisa = undefined;
// void (vazio)
function logger() {
    console.log('foo');
}
// never (nunca vai retornar)
function error() {
    throw new Error('error');
}
// object (qualquer coisa)
let cart;
cart = {
    key: 'foo'
};
// Type Inference
let message2 = 'mensagem definida';
message2 = 'string nova';
window.addEventListener('click', (e) => {
    console.log(e.target);
});
