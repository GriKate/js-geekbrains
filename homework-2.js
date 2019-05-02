// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2
// d = b++; alert(d);           // 1
// c = (2+ ++a); alert(c);      // 2+3=5
// d = (2+ b++); alert(d);      // 2+2=4
// alert(a);                    // 3
// alert(b);                    // 3

// var a = 2;
// var x = 1 + (a *= 2); //5

// //3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
// var a = -1, b = 3;
//
// if (a >= 0 && b >= 0) {
//     alert(a - b);
// } else if(a < 0 && b < 0) {
//     alert(a * b);
// } else {
//      alert(a + b);
// }
//// } else if((a >= 0 && b <= 0) || (a <= 0 && b >= 0)) {
////     alert(a + b);
//// }

//. Присвоить переменной а значение в промежутке [0..15].
// var a = +prompt("Введите число от 0 до 15");
//
// switch (a) {
//     case 0:
//         alert(0);
//     case 1:
//         alert(1);
//     case 2:
//         alert(2);
//     case 3:
//         alert(3);
//     case 4:
//         alert(4);
//     case 5:
//         alert(5);
//     case 6:
//         alert(6);
//     case 7:
//         alert(7);
//     case 8:
//         alert(8);
//     case 9:
//         alert(9);
//     case 10:
//         alert(10);
//     case 11:
//         alert(11);
//     case 12:
//         alert(12);
//     case 13:
//         alert(13);
//     case 14:
//         alert(14);
//     case 15:
//         alert(15);
// }

// while (a <= 15) {
//             alert(a++);
//         };
//         break;

//5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
function sum(a, b) {
    return alert(a + b);
};
// var c = sum(2, 3);
//
function subtraction(a, b) {
    return alert(a - b);
}
// var c = subtraction(6, 3);
//
function mult(a, b) {
    return alert(a * b);
}
// var c = mult(3, 5);
//
function division(a, b) {
    return alert(a / b);
}
// var c = division(20, 5);

//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2
function mathOperation(arg1, arg2, operation) {
    if (arg1 >= 0 && arg2 >= 0) {
        switch (operation) {
            case "-":
                return subtraction(arg1, arg2);
            case "+":
                return sum(arg1, arg2);
            case "*":
                return mult(arg1, arg2);
            case "/":
                return division(arg1, arg2);
            default:
                alert("Произошла ошибка! Некорректная операция")
        }
    }
}
var a = +prompt("Введите первое число:");
var b = +prompt("Введите второе число:");
var o = prompt("Введите символ операции (-, +, *, /):");
var answer = mathOperation(a, b, o);


//7. *Сравнить null и 0. Попробуйте объяснить результат.

//8. *С помощью рекурсии организовать функцию возведения числа в степень.
