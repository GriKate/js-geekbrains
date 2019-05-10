// 1. Функция, преобразующая число в объект
function toObject(num) {
    var numObj = {
        units: 0,
        tens: 0,
        hundreds: 0,
    };
    if (num < 0 || num > 999) {
        alert("Ошибка! Некорректное значение");
        return numObj;
    } else {
        num += '';
        var numArr = num.split('');
        if (numArr.length === 1) {
            numObj.units = +numArr[0];
        } else if (numArr.length === 2) {
            numObj.units = +numArr[1];
            numObj.tens = +numArr[0];
        } else if (numArr.length === 3) {
            numObj.units = +numArr[2];
            numObj.tens = +numArr[1];
            numObj.hundreds = +numArr[0];
        }
        ;
        return numObj;
    }
    ;
};
var num = +prompt('Введите число от 0 до 999:');
console.log(toObject(num));

//2. функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров
var products = [
    {
        name: 'dress',
        price: 15,
        quantity: 1,
    },
    {
        name: 'pants',
        price: 10,
        quantity: 3,
    },
    {
        name: 'shirt',
        price: 5,
        quantity: 2,
    }
];

function countBasketPrice() {
    var basketSum = 0;
    for (var i = 0; i < products.length; i++) {
        basketSum += products[i].price * products[i].quantity;
    }
    return basketSum;
}

var basket = countBasketPrice();
alert('Сумма товаров в корзине: ' + basket + '$');