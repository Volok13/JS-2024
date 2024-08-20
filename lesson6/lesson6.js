
// let s1 = 'hello world';
// console.log(s1.length);
// let s2 = 'lorem ipsum';
// console.log(s2.length);
// let s3 = 'javascript is cool';
// console.log(s3.length);
//
//
// const strings = [s1, s2, s3];
// for (const s of strings) {
//     console.log(s.length);
// }


// let s1 = 'hello world';
// console.log(s1.toUpperCase());
// let s2 = 'lorem ipsum';
// console.log(s2.toUpperCase())
// let s3 = 'javascript is cool';
// console.log(s3.toUpperCase())

// let s1 = 'HELLO WORLD';
// console.log(s1.toLowerCase());
// let s2 = 'LOREM IPSUM';
// console.log(s2.toLowerCase())
// let s3 = 'JAVASCRIPT IS COOL';
// console.log(s3.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str= 'dirty string';

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// function stringToArray(str) {
//     if (str){
//         const split = str.split(' ');
//         return split;
//     }
//     return [''];
//
// }
// console.log(stringToArray('Ревуть воли як ясла повні'))

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// const numbers = [10,8,-7,55,987,-1011,0,1050,0];
//
// const strings = numbers.map(number => number + '');
//
// console.log(strings);

// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// function sortNums(arrayOfNums,direction) {
//     if (direction === 'asceding') return arrayOfNums.sort((a, b) => a - b);
//     if (direction === 'asceding') return arrayOfNums.sort((a, b) => b - a);
// }


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// const sort = coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration);
//
// const filter = sort.filter(value => value.monthDuration > 5);
//
// const map = filter.map((value, index)=> {
//     value.id = index + 1;
//     return value;
// });
//
// console.log(map);
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// const map1 = coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter(value => value.monthDuration > 5)
//     .map((value, index) => {
//     value.id = index + 1;
//     return value;
// });
//
// console.log(map1);

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

// const suits = ['spade', 'diamond', 'heart', 'club']
// const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
// const cards = []
//  for (const suit of suits) {
//      for(const value of values) {
//          const card = {cardSuit : suit, value: value};
//          if(suit === 'heart' || suit === 'diamond') {
//              card.color = 'red';
//          }else {
//              card.color = 'black';
//          }
//          cards.push(card);
//
//      }
//  }
// console.log(cards);
//
//
// // - знайти піковий туз
// console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
// // - всі шістки
// console.log(cards.filter(card => card.value === '6' ));
// // - всі червоні карти
// console.log(cards.filter(card => card.color === 'red'));
// // - всі буби
// console.log(cards.filter(card => card.carsSuit === 'diamond'));
// // - всі трефи від 9 та більше
// console.log(cards.filter(card => card.cardSuit === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));


//
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


// const suits = ['spade', 'diamond', 'heart', 'club'];
// const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
// const cards = [];
//  for (const suit of suits) {
//      for (const value of values) {
//          const card = {cardSuit: suit, value: value};
//          if(suit === 'heart' || suit === 'diamond') {
//              card.color = 'red';
//          } else {
//              card.color = 'black';
//          }
//          cards.push(card);
//
//      }
//  }
// console.log(cards);
//
//
// const groupedCards = cards.reduce((accum, card) => {
//      switch (card.cardSuit) {
//          case 'spade':
//              accum.spades.push(card);
//              break;
//          case 'diamond':
//              accum.diamonds.push(card);
//              break;
//          case 'heart':
//              accum.hearts.push(card);
//              break;
//          case 'club':
//              accum.clubs.push(card);
//              break;
//
//      }
//
//      return accum;
//
//  }, {
//      spades: [],
//      diamonds: [],
//      hearts: [],
//      clubs: []
//  });
//
//
//  console.log(groupedCards);


// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// console.log(coursesArray.filter(course => {
//    return course.modules.includes('sass');
// }));
//
// console.log(coursesArray.filter(course => {
//     return course.modules.includes('docker');
// }));














