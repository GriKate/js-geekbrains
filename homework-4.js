// 1. Функция, преобразующая число в объект
function toObject(num) {
    // var numObj = {
    //     units: 0,
    //     dozen: 0,
    //     hundreds: 0,
    // };
    if (isNaN(+num) || num < 0 || num > 999) {
        alert("Ошибка! Некорректное значение");
        return {};
    } else {
        num += '';
        var numArr = num.split('');
        var keys = ['units', 'dozen', 'hundreds'];
        var numObj = {};
        for (var i = numArr.length - 1; i >= 0; i--) {
            var key = keys[numArr.length - 1 -  i];
            numObj[key] = numArr[i];
        };
        return numObj;
    };
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