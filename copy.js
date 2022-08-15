/*let fs = require('fs')*/
let file = 'video3.mp4'

let read = fs.createReadStream(file)
fs.stat(file, (err, stat) => {
  let total = stat.size


  read.on('data', (chunk) => {
    console.log("J'ai lu " + chunk.length)
  })
  read.on('end', () => {
    console.log("J'ai fini de lire le fichier")
  })

})



/*fs.readFile('video3.mp4',(err, data) => {
  if (err) throw err
  fs.writeFile('copy.mp4', data, (err) => {
    if (err) throw err
    console.log('Le fichier a bien été copié')
  })
})*/
