const express = require('express');
const app = express();
const server = require('http').Server(app);
// genetrate unique id for room
const { v4: uuidv4 } = require('uuid');

const uniqueId = uuidv4();

// Set the view engine for rendering dynamic HTML pages
// We're using EJS (Embedded JavaScript) as the template engine
app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/', (req, res)=>{
    // res.render('room');
    // res.send("Unique ID:" + uniqueId)
    res.redirect(`/${uniqueId}`);
});

app.get('/:roomID', (req, res) =>{
    res.render('room', {id: req.params.roomID});
})




server.listen(4000);