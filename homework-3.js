// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
// var num = 0;
// while(num <= 100) {
//     console.log(num++);
// };


//2. функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров
var products = [['dress', 15], ['pants', 10], ['shirt', 5]];

function countBasketPrice() {
    var sumArr = [];
    basketSum = 0;
    for (var i = 0; i < products.length; i++) {
        productPrice = products[i][1];
        sumArr.push(productPrice);
    }
    for (var j = sumArr.length - 1; j >= 0; j--) {
        basketSum = basketSum + sumArr[j];
    }
    return basketSum;
}

var basket = countBasketPrice();
alert('Сумма товаров в корзине: ' + basket + '$');

//3. Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
// for(var i = 0; i <= 9; console.log(i++)) {};

//4. Нарисовать пирамиду с помощью console.log
// for (var signPyramide = ''; signPyramide.length <= 20; signPyramide += 'x') {
//     console.log(signPyramide);
// };