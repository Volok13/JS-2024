let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (users of users) {
    document.write(`
    <div>
    <p> Статус - ${users.status - true} Ім'я - ${users.name} Вік - ${users.age}</p>
    <p> Статус - ${users.status - false}  Ім'я - ${users.name} Вік - ${users.age}</p>
    <p> Вік - ${users.age > 30} Ім'я - ${users.name} Вік - ${users.age}</p>
</div>
    `)
}

// for (let i = 0; i < 6; i++) {
//     if (users[i].age < 30){
//         console.log(age)
//     }
// }


// <p>${users.status - false} ${users.name} ${users.age}</p>
// <p>${users.age <= 30} ${users.name} ${users.age}</p>