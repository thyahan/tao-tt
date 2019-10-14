const express  = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hi express');
})

app.listen(9090, ()=>console.log('at 9090'));