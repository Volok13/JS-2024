function foobar(users){
    for (const user of users){
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
foobar([
    {id: 1, name: 'ffofeg', age: 63},
    {id: 2, name: 'ffofeg', age: 63},
    {id: 3, name: 'ffofeg', age: 63},
    {id: 4, name: 'ffofeg', age: 63},
    {id: 5, name: 'ffofeg', age: 63},
])