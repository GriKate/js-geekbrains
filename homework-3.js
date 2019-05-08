// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
function isSimple(num) {
    if (num < 2) {
        return false;
    }
    var i = 2;
    while (i < num) {
        if (num % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}

var i = 0;
while (i <= 100) {
    if (isSimple(i)) {
        console.log (i);
    }
    i++;
}


//2. функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров
var products = [['dress', 15, 1], ['pants', 10, 3], ['shirt', 5, 2]];

function countBasketPrice() {
    var basketSum = 0;
    for (var i = 0; i < products.length; i++) {
        basketSum += products[i][1] * products[i][2];
    }
    return basketSum;
}

var basket = countBasketPrice();
alert('Сумма товаров в корзине: ' + basket + '$');

//3. Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
for(var i = 0; i <= 9; console.log(i++)) {};

//4. Нарисовать пирамиду с помощью console.log
for (var signPyramide = ''; signPyramide.length <= 20; signPyramide += 'x') {
    console.log(signPyramide);
};