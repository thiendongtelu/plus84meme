const express = require('express');
const cors = require('cors');
 
const app = express()
 
app.get('/', (req, res) => {
   res.send({sayHi: 'hello from server!'})
})
 
app.get('/api/hello', (req,res)=>{
   res.json({sayHi: 'hello'})
}) 

app.use(cors);

app.listen(5000, () => {
   console.log('App listening on port 5000')
})