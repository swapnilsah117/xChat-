const path = require('path')
const express = require('express')
const { dirname } = require('path')


const app = express()
const http = require('http')

const server = http.createServer(app)
const socketio = require('socket.io')
const io = socketio(server)

const port = process.env.PORT||3000
const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))


// app.get('', (req, res) => res.send('index'))

let count  = 0;

io.on('connection',(socket)=>{
    socket.emit('message','Welcome!')

    socket.broadcast.emit('message','A New User Has Joined')
    console.log('New Socket')

    socket.on('send',(message)=>{
        io.emit('message',message)
    })

    socket.on('disconnect',()=>{
        io.emit('message','A user has left')
    })

}) 


 
server.listen(port, () => console.log('Example app listening on port '+port+'!'))










// io.on('connection',(socket)=>{
//     console. log('New We Socket Connection')

//     socket.emit('countUpdated',count)

//     socket.on('increment',()=>{   
//         count++ 
//         socket.emit('countUpdated',count)
//     })
// })