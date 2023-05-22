
const {readFileSync, writeFileSync, readFile, writeFile} = require('fs')

//const first = readFileSync('./content/first.txt', 'utf8')
//const second = readFileSync('./content/second.txt', 'utf8')


//const result = writeFileSync('./content/result.txt', `The result is ${first} ,  ${second}`)

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
        
        writeFile('./content/resultasync.txt', `Here is the result ${first}, ${second} ASYNCCCCCCC`, (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })

    })
})