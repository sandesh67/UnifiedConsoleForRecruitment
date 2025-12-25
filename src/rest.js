
const express = require('express');

const app = express();

app.get('/test',(req,res) => {
  console.log('I am listening');
});

app.listen(3000,() => console.log("listening port"));