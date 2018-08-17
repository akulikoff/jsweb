let money = prompt('Сколько у вас с собой есть денег?');
let apple = prompt('Сколько вы купили яблок?');
let bread = prompt('Сколько вы купили батонов хлеба?');
let applePrice = prompt('Cколько стоит одно яблоко?');
let breadPrice = prompt('Сколько стоит один батон хлеба?');
let totalPrice = apple*applePrice + bread*breadPrice;
document.write(money>=totalPrice);