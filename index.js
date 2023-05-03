const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Bangladeshi Foods recipe is Running')
  });

app.get('/chep', (req, res) => {
    res.send('')
  })

  app.listen(port, () => {
    console.log(`Bangladeshi Foods recipe API is Running on port ${port}`)
  })