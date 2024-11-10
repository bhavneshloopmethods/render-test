const express = require('express');
const app = express();

app.get("/status",( req, res)=> {
    res.status(200).json({ status: 'active'})
})
app.listen(2000, ()=> {
    console.log('server is listning on port 2000');
    
})