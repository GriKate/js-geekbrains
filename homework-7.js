var cartArr = [
    {
        id: 0,
        name: 'Jacket',
        price: 3000,
        img: 'catalogue_img_3.jpg',
        quantity: 2,
    },
    {
        id: 1,
        name: 'Coat',
        price: 5000,
        img: 'catalogue_img_2.jpg',
        quantity: 1,
    },
    {
        id: 2,
        name: 'Shirt',
        price: 1500,
        img: 'catalogue_img_4.jpg',
        quantity: 1,
    },
];

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

function buildCart() {
    var $cartDrop = document.querySelector('#cart-drop');
    $cartDrop.innerHTML = ''; //////////////////////// предварительно удаляем из корзины предыдущую разметку
    console.log('hi');
    if (cartArr.length > 0) {
        for (var k = 0; k < cartArr.length; k++) {
            var $cartSection = document.querySelector('#cart-section').cloneNode(true);
            $cartSection.style.display = 'block';
            $cartSection.querySelector('.cart-img').src = cartArr[k].img;
            $cartSection.querySelector('.cart-title').textContent = cartArr[k].name;
            $cartSection.querySelector('.cart-price').textContent = cartArr[k].price;
            $cartSection.querySelector('.cart-quantity').textContent = cartArr[k].quantity;
            $cartSection.querySelector('.cart-button').dataset.id = cartArr[k].id;
            $cartDrop.appendChild($cartSection);
        }
        $cartSection.querySelector('.cart-total').textContent = countCart(); ///////////////// 4 функция - подсчет суммы и кол-ва

    } else {
        $cartDrop.textContent = 'Корзина пуста';
    }
}

function handleTabClick(event) {
    event.preventDefault();
    if (event.target.classList.contains('continue-button')) {
        var $blocks = document.getElementsByClassName('block');
        for (var i = 0; i < $blocks.length; i++) {
            $blocks[i].classList.remove('active');
        }
        var id = event.target.getAttribute('href');
        document.querySelector(id).classList.add('active');
    }
}

function init() {
    buildCart();
    var $cartDrop = document.querySelector('#cart-drop');
    $cartDrop.addEventListener('click', deleteProduct);

    var $accordeon = document.getElementById('accordeon');
    $accordeon.addEventListener('click', handleTabClick);
}

window.addEventListener('load', init);