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
// if (a>=0 && b>=0) {
//     alert(a - b);
// } else if(a<0 && b<0) {
//     alert(a * b);
// } else if((a>=0 && b<=0) || (a<=0 && b>=0)) {
//     alert(a + b);
// }

//. Присвоить переменной а значение в промежутке [0..15].
// var a = +prompt("Введите число от 0 до 15");
//
// switch (a) {
//     case 0:
//         while (a <= 15) {
//             alert(a++);
//         };
//         break;
//     case 1:
//         while (a <= 15) {
//             alert(a++);
//         };
//         break;
//     case 2:
//         while (a <= 15) {
//             alert(a++);
//         };
//         break;
//     case 3:
//         while (a <= 15) {
//             alert(a++);
//         };
//         break;
//     case 4:
//         while (a <= 15) {
//             alert(a++);
//         };
//         break;
//     case 5:
//         while (a <= 15) {
//             alert(a++);
//         };
//         break;
//     case 6:
//         while (a <= 15) {
//             alert(a++);
//         };
//         break;
//     case 7:
//         while (a <= 15) {
//             alert(a++);
//         };
//         break;
//     case 8:
//         while (a <= 15) {
//             alert(a++);
//         };
//         break;
//     case 9:
//         while (a <= 15) {
//             alert(a++);
//         };
//         break;
//     case 10:
//         while (a <= 15) {
//             alert(a++);
//         };
//         break;
//     case 11:
//         while (a <= 15) {
//             alert(a++);
//         };
//         break;
//     case 12:
//         while (a <= 15) {
//             alert(a++);
//         };
//         break;
//     case 13:
//         while (a <= 15) {
//             alert(a++);
//         };
//         break;
//     case 14:
//         while (a <= 15) {
//             alert(a++);
//         };
//         break;
//     case 15:
//         while (a <= 15) {
//             alert(a++);
//         };
//         break;
// }

//5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// function sum(a, b) {
//     return alert(a + b);
// };
// var c = sum(2, 3);
//
// function subtraction(a, b) {
//     return alert(a - b);
// }
// var c = subtraction(6, 3);
//
// function mult(a, b) {
//     return alert(a * b);
// }
// var c = mult(3, 5);
//
// function division(a, b) {
//     return alert(a / b);
// }
// var c = division(20, 5);

//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2
function mathOperation(arg1, arg2, operation) {
    if (arg1>=0 && arg2>=0) {
        switch (operation) {
            case "-":
                return alert(arg1 - arg2);
                break;
            case "+":
                return alert(arg1 + arg2);
                break;
            case "*":
                return alert(arg1 * arg2);
                break;
        }
    }
}
var a = +prompt("Введите первое число:");
var b = +prompt("Введите второе число:");
var o = prompt("Введите символ операции (-, +, *):");
var answer = mathOperation(a, b, o);


//7. *Сравнить null и 0. Попробуйте объяснить результат.

//8. *С помощью рекурсии организовать функцию возведения числа в степень.