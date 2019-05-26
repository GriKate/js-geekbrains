var products = [
    {
        id: 0,
        name: 'Jacket',
        price: 3000,
        img: 'catalogue_img_3.jpg',
    },
    {
        id: 1,
        name: 'Coat',
        price: 5000,
        img: 'catalogue_img_2.jpg',
    },
    {
        id: 2,
        name: 'Shirt',
        price: 1500,
        img: 'catalogue_img_4.jpg',
    },
];

var cartArr = [];

function buildCatalog() {
    var $catalog = document.querySelector('#catalog');
    for (var i = 0; i < products.length; i++) {
        var $template = document.querySelector('#template').children[0].cloneNode(true);
        $template.querySelector('.catalog-title').textContent = products[i].name;
        $template.querySelector('.catalog-img').src = products[i].img;
        $template.querySelector('.catalog-price').textContent = products[i].price;
        $template.querySelector('.catalog-button').dataset.id = products[i].id;
        $template.querySelector('.catalog-button').dataset.name = products[i].name;
        $template.querySelector('.catalog-button').dataset.img = products[i].img;
        $template.querySelector('.catalog-button').dataset.price = products[i].price;
        $catalog.appendChild($template);
    }
}

// 3

function buildCart() {
    var $cartDrop = document.querySelector('#cart-drop');
    $cartDrop.innerHTML = ''; //////////////////////// предварительно удаляем из корзины предыдущую разметку
    if (cartArr.length > 0) {
        for (var k = 0; k < cartArr.length; k++) {
            var $cartSection = document.querySelector('#cart-section').cloneNode(true);
            $cartSection.style.display = 'block';
            $cartSection.querySelector('.cart-img').src = cartArr[k].img;
            $cartSection.querySelector('.cart-title').textContent = cartArr[k].name;
            $cartSection.querySelector('.cart-price').textContent = cartArr[k].price;
            $cartSection.querySelector('.cart-button').dataset.id = cartArr[k].id;
            $cartDrop.appendChild($cartSection);
        }
        $cartSection.querySelector('.cart-total').textContent = countCart(); ///////////////// 4 функция - подсчет суммы и кол-ва
    } else {
        $cartDrop.textContent = 'Корзина пуста';
    }

}

// 1

function isExist(id) {
    for (var i = 0; i < cartArr.length; i++) {
        if (cartArr[i].id === id) {
            return true;
        }
    }
    return false;
}

// 2

function findIndex(id) {
    for (var i = 0; i < cartArr.length; i++) {
        if (cartArr[i].id === id) {
            return i;
        }
    }
}

// 4

function countCart() {
    var sum = 0;
    var count = 0;
    for (var i = 0; i < cartArr.length; i++) {
        sum += cartArr[i].price * cartArr[i].quantity;
        count += cartArr[i].quantity;
    }
    var message = 'В корзине ' + count + ' товаров на сумму ' + sum + ' рублей';
    return message;
}

function handleBuyClick(event) {
    if (event.target.tagName === 'BUTTON') {
        console.log(event.target.dataset); //////////////// массив всех .дата находим через общий датасет
        if (isExist(+event.target.dataset.id)) { ////////////////// 1 функция - существует ли в корзине товар с таким id
            var index = findIndex(+event.target.dataset.id); //////////////// 2 функция - находим индекс товара с таким id в массиве корзины
            cartArr[index].quantity++;
        } else {
            cartArr.push({
                id: +event.target.dataset.id,
                name: event.target.dataset.name,
                price: event.target.dataset.price,
                img: event.target.dataset.img,
                quantity: 1,
            });
        }
    }
    buildCart(); ///////////// 3 функция - строим корзину
}

function deleteProduct(event) {
    if (event.target.className === 'cart-button') {
        for (var i = 0; i < cartArr.length; i++) {
            if (cartArr[i].id === +event.target.dataset.id) {
                var index = i;
                if (cartArr[i].quantity > 1) {
                    cartArr[i].quantity--;
                } else {
                    cartArr.splice(index, 1);
                }
                console.log(cartArr);
                buildCart();
            }
        }
    }
}

function handleCloseClick(event) {
    if (event.target.className === 'modal-button') {
        var $overlay = document.querySelector('#overlay');
        $overlay.style.display = 'none';
    }
    var $closeButton = $overlay.querySelector('.modal-button');
}

function displayModal(event) {
    if (event.target.className === 'catalog-img') { ///////////////кроме .tagName можно проверять по .className
        var $overlay = document.querySelector('#overlay');
        $overlay.style.display = 'block';
        var $modalImg = $overlay.querySelector('.modal-img');
        $modalImg.src = event.target.src;
        $overlay.addEventListener('click', handleCloseClick);
    }
}

function init() {
    buildCatalog();
    var $catalog = document.querySelector('#catalog');
    $catalog.addEventListener('click', handleBuyClick);
    var $cartDrop = document.querySelector('#cart-drop');
    $cartDrop.textContent = 'Корзина пуста';
    $cartDrop.addEventListener('click', deleteProduct);
    $catalog.addEventListener('click', displayModal);
}

window.addEventListener('load', init);