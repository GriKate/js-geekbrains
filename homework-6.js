var products = [];

var $list = document.querySelector('.products__list');

var $cart = document.querySelector('.header__right_cart-box');
var $cartBox = document.querySelector('.cart-drop');
$cartBox.classList.remove('cart-drop');

var $newCartDrop = document.createElement('div');
$newCartDrop.classList.add('cart-drop', 'cart-js');
$cart.appendChild($newCartDrop);

var $basketText = document.createElement('p');
$basketText.classList.add('basket-total-text');
$newCartDrop.appendChild($basketText);
$basketText.textContent = 'Корзина пуста';

//функция подсчета корзины

function countBasketTotal() {
    var basketTotal = 0;
    var quantityOfProducts = 0;
    for (var i = 0; i < products.length; i++) {
        basketTotal += products[i].price * products[i].quantity;
        quantityOfProducts += products[i].quantity;
    }
    // return basketTotal;
    $basketText.textContent = 'В корзине ' + quantityOfProducts + ' товаров на сумму ' + basketTotal + ' рублей';
}


//подписка на событие родителя
$list.addEventListener('click', handleButtonClick);

//находим картинку товара и прописываем ей его название и стоимость
function handleButtonClick(event) {
    var $productButton = event.target;
    var productObj = {
        name: '',
        price: 0,
        quantity: 1,
    };

    var $parent = event.target.closest('.products__item');
    var $productText = $parent.querySelector('.products__link-name');
    var productName = $productText.textContent;
    $productButton.dataset.name = productName;
    productObj.name = $productButton.dataset.name;

    var $price = $parent.querySelector('.products__link-price');
    var productPrice = $price.textContent;
    $productButton.dataset.price = productPrice;
    productObj.price = +$productButton.dataset.price;

    // productObj.quantity++;

    if (products.length > 0) {
        products.push(productObj);
        for (var i = 0; i < products.length - 1; i++) {
            if (productObj.name === products[i].name && productObj.price === products[i].price) {
                console.log(products[i].name);
                products[i].quantity++;
                products.pop(productObj);
            }
        }
    } else {
        products.push(productObj);
    }
    countBasketTotal();
}



