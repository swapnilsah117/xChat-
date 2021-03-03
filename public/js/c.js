
// const  socket = io()
// socket.on('countUpdated',(count)=>{
//     console.log('Count Updated',count)
// })
// document.querySelector('#increment').addEventListener('click',()=>{
//     console.log('clicked')
//     socket.emit('increment')
// })


// const  socket = io()
// socket.on('message',(message)=>{
//     console.log(message)
// })

// document.querySelector('#send').addEventListener('click',()=>{
//     const input = document.querySelector('#input-1').value
//     // console.log('sending')
//     socket.emit('send',input)
// })


const  socket = io()

const messageContainer = document.querySelector('#message-container')
const messageRender = document.querySelector('#message-render').innerHTML



socket.on('message',(message)=>{
    console.log(message)
    const msg = Mustache.render(messageRender,{
        message:message
    })    
    messageContainer.insertAdjacentHTML('beforeend',msg)
})

document.querySelector('#chat-form').addEventListener('submit',(e)=>{
    e.preventDefault()
    
    // const input = document.querySelector('input').value
    const input = e.target.elements.input.value

    socket.emit('send',input)
    
    e.target.elements.input.value = ''
    e.target.elements.input.focus()
    // socket.emit('send',input,()=>{
    //     console.log('This Message was Delivered Sucessfully')
    // }) 

}) 