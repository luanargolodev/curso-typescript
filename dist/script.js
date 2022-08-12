"use strict";
const $num1 = document.querySelector('#num1');
const $num2 = document.querySelector('#num2');
const $button = document.querySelector('#button');
function sum(a, b) {
    return a + b;
}
$button.addEventListener('click', function () {
    console.log(sum(Number($num1.value), Number($num2.value)));
});
