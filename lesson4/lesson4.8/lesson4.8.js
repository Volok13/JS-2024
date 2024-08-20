function foobar(text){
    document.write(`<ul>`)
    for (const item of text){
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)

}
foobar([132434, 4353, 42524, 2553, 'fjkdf', 'hfhgih', 'huguhgf', true])