const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

// 中间键要放在前面 要不请求的时候会返回 undefined
app.use(bodyParser.json());
routes(app);

// app.get('/', (req, res) => {
//     res.send('Hello, client');
// })

// app.post('/post', (req, res) => {
//     console.log(req.body);
// });

mongoose.connect('mongodb://127.0.0.1:27017/img-upload', {
    useNewUrlParser: true,
});
const db = mongoose.connection;
db.on('error', () => console.error('Mongo Failed to Connect!!!!'));
db.on('connected', () => console.log('Mongo Connected'));


app.listen(3009, () => {
    console.log('runnign on port 3009');
})