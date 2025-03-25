const express = require('express');

const app = express();
const port = 3000;

app.get(
    '/',(req, res)=>{
        res.send('Hello express JS');}
);

app.get('/msg', (req, res)=>{
    res.send('Hello IT Students');
});

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})