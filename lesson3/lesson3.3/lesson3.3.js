let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// for (let i = 0; i < listOfItems.length; i++) {
//     document.write(`<li> + listOfItems[i] + </li>`)
// }

for (let i = 0; i < listOfItems.length; i++) {
    document.write(`
    <ul class="box"> 
    <li>${listOfItems}</li>
    </ul>
    `);
}
