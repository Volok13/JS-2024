// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id , name, surname, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.phone = phone;
// }
//  const user = new User(1, 'fjdjff', 'jfbjfjf', '+9374892394');
// console.log(user);
//
// let users = [
//     new User(1, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(2, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(3, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(4, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(5, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(6, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(7, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(8, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(9, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(10, 'fjdjff', 'jfbjfjf', '+9374892394'),
// ];
// console.log(users)


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// function User(id , name, surname, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.phone = phone;
// }
// let users = [
//     new User(1, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(2, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(3, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(4, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(5, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(6, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(7, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(8, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(9, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(10, 'fjdjff', 'jfbjfjf', '+9374892394'),
// ];
// function filterFunction(user) {
//     return user.id % 2 === 0;
//
// }
// const filterUsers = users.filter(filterFunction);
// console.log(filterUsers)


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// function User(id , name, surname, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.phone = phone;
// }
// let users = [
//     new User(1, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(2, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(10, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(4, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(3, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(5, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(7, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(8, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(9, 'fjdjff', 'jfbjfjf', '+9374892394'),
//     new User(6, 'fjdjff', 'jfbjfjf', '+9374892394'),
// ];
// function sorter(user1, user2) {
//     return user1.id - user2.id;
// }
//
// console.log(users.sort(sorter));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// function Client(id, name, surname , email, phone, ...products) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = products;
// }
//
// function Product(title, price) {
//     this.title = title;
//     this.price = price;
// }
//
// const client = new Client(1, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', new Product('tv', 13000), new Product('phone', 213244));
//
//
// let clients = [
//     new Client(1, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', [{title: 'tv', price: 13000}, {title: 'phone', price: 98473}]),
//     new Client(2, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', [{title: 'tv', price: 13000}, {title: 'phone', price: 98473}]),
//     new Client(3, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', [{title: 'tv', price: 13000}, {title: 'phone', price: 98473}]),
//     new Client(4, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', [{title: 'tv', price: 13000}, {title: 'phone', price: 98473}]),
//     new Client(5, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', [{title: 'tv', price: 13000}, {title: 'phone', price: 98473}]),
//     new Client(6, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', [{title: 'tv', price: 13000}, {title: 'phone', price: 98473}]),
//     new Client(7, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', [{title: 'tv', price: 13000}, {title: 'phone', price: 98473}]),
//     new Client(8, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', [{title: 'tv', price: 13000}, {title: 'phone', price: 98473}]),
//     new Client(9, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', [{title: 'tv', price: 13000}, {title: 'phone', price: 98473}]),
//     new Client(10, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', [{title: 'tv', price: 13000}, {title: 'phone', price: 98473}]),
// ];
//
// console.log(clients.order);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// function Client(id, name, surname , email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
//
//
// let clients = [
//     new Client(1, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', [{title: 'tv', price: 13000}, {title: 'phone', price: 98473}, {title: 'phone', price: 98473}]),
//     new Client(2, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', [{title: 'tv', price: 13000}]),
//     new Client(3, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', [{title: 'tv', price: 13000}, {title: 'phone', price: 98473}, {title: 'phone', price: 98473}, {title: 'phone', price: 98473}]),
//     new Client(4, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', [{title: 'tv', price: 13000}, {title: 'phone', price: 98473}]),
//     new Client(5, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', [{title: 'tv', price: 13000}, {title: 'phone', price: 98473}]),
//     new Client(6, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', [{title: 'tv', price: 13000}]),
//     new Client(7, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', [{title: 'tv', price: 13000}, {title: 'phone', price: 98473}]),
//     new Client(8, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', [{title: 'tv', price: 13000}, {title: 'phone', price: 98473}]),
//     new Client(9, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', [{title: 'tv', price: 13000}, {title: 'phone', price: 98473}]),
//     new Client(10, 'sffg', 'gkjgk', 'dsff@jmail.com', '+48248325835', [{title: 'tv', price: 13000}, {title: 'phone', price: 98473}]),
// ];
//
// const sort = clients.sort((a, b) => a.order.length - b.order.length);
// console.log(sort);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function () {
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     };
//     this.increaseMaxSpeed = function (speedToAdd) {
//         if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
//     };
//     this.changeYear = function (year) {
//        if (year > 1815) this.year = year;
//     };
//     this.addDriver = function (driver) {
//         if (driver) this.driver = driver;
//     };
// }
//
// const car = new Car('jfhefh', 'fdufufur', 2000, 343, 9);
// console.log(car);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(1994);
// car.addDriver({});
// console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

// class Car{
//     constructor(model, producer, year, maxSpeed, engineVolume) {
//         this.mode = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     }
//     drive () {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     info () {
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     };
//     increaseMaxSpeed (speedToAdd) {
//         if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
//     };
//     changeYear (year) {
//        if (year > 1815) this.year = year;
//     };
//     addDriver (driver) {
//         if (driver) this.driver = driver;
//     };
//
// }
//
// const car = new Car('jfhefh', 'fdufufur', 2000, 343, 9);
// console.log(car);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(1994);
// car.addDriver({});
// console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// class Prince{
//     constructor(name, age, slipper) {
//         this.name = name;
//         this.age = age;
//         this.slipper = slipper;
//     }
// }
//
// const cinderellas = [
//     new Cinderella('jdnsf', 234, 32),
//     new Cinderella('jdnsf', 234, 33),
//     new Cinderella('jdnsf', 234, 34),
//     new Cinderella('jdnsf', 234, 35),
//     new Cinderella('jdnsf', 234, 36),
//     new Cinderella('jdnsf', 234, 37),
//     new Cinderella('jdnsf', 234, 38),
//     new Cinderella('jdnsf', 234, 39),
// ];
//
// const prince = new Prince('jsfdjn', 32, 36);
//
// // for (const cinderella of cinderellas) {
// //     if (cinderella.footSize === prince.slipper) {
// //         prince.wife = cinderella;
// //     }
// // }
// const cinderellaMain = cinderellas.find (cinderella => cinderella.footSize === prince.slipper);
// prince.wife = cinderellaMain;
//
// console.log(cinderellaMain)
//
// *Через Array.prototype. створити власний foreach, filter




















