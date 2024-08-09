// let x = null
// console.log(!!x);

// let x = null
// if (true) {
//     console.log('IF');
// } else {
//     console.log('else');
// }
let x = null;
switch (x) {
    case null:
    case undefined:
    case 0:
    case '':
       x = 'default';
       break;
    default:
        console.log(x);
        break;
}
console.log(x);
