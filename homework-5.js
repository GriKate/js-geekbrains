// рисуем доску

var $table = document.createElement('table');
$table.classList.add('table');
document.body.appendChild($table);

var $row = document.createElement('tr');
$row.classList.add('row');
$table.appendChild($row);

var $cell = document.createElement('td');
$cell.classList.add('cell');
$row.appendChild($cell);

var rowArray = document.getElementsByClassName('row');
var cellArray = document.getElementsByClassName('cell');
while (rowArray.length < 10) {
    while (cellArray.length < 10) {

        var $copyCell = $cell.cloneNode(true);
        $row.appendChild($copyCell);
    }
    var $copyRow = $row.cloneNode(true);
    $table.appendChild($copyRow);
}

// расставляем буквы

function setLetters(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i > 0 && i < arr.length - 1) {
            var lettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            arr[i].textContent = lettersArray[i - 1];
            arr[i].classList.add('cell-number');
        }
    }
}
var topLetterRow = rowArray[0].getElementsByClassName('cell');//////////////////////0
setLetters(topLetterRow);
var bottomLetterRow = rowArray[rowArray.length - 1].getElementsByClassName('cell');//////////////////////9
setLetters(bottomLetterRow);

// расставляем цифры и черные клетки

for (var k = 1; k < rowArray.length - 1; k++) {//row 01 89
    var numRow = rowArray[k].getElementsByClassName('cell');//[cell cell...]
    for (var j = 0; j < numRow.length; j++) {
        if (j === 0 || j === numRow.length - 1) {
            numRow[j].textContent = k;
            numRow[j].classList.add('cell-number');
        }
    }
    if (k % 2 === 0) {
        for (var j = 0; j < numRow.length; j++) {
            if (j > 0 && j < numRow.length - 1 && j % 2 !== 0) {
                numRow[j].classList.add('black');
            }
        }
    } else {
        for (var j = 0; j < numRow.length; j++) {
            if (j > 0 && j < numRow.length - 1 && j % 2 === 0) {
                numRow[j].classList.add('black');
            }
        }
    }
}


// Сделать генерацию корзины

var products = [
    {
        name: 'dress',
        price: 3500,
        quantity: 1,
    },
    {
        name: 'pants',
        price: 2000,
        quantity: 3,
    },
    {
        name: 'shirt',
        price: 500,
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

var basketSum = countBasketPrice();

var $basket = document.getElementsByClassName('basket')[0];
var $basketText = document.createElement('p');
$basketText.classList.add('text');
$basket.appendChild($basketText);

if (products.length === 0) {
    $basketText.textContent = 'Корзина пуста';
} else {
    $basketText.textContent = 'В корзине ' + (products.length) + ' товаров на сумму ' + basketSum + ' рублей';
}
