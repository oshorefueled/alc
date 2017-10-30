/**
 * Created by osho on 10/30/17.
 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(port, (err) => {
    if (err) {
        console.log('an error occurred when starting the server');
    } else {
        console.log(`server running on port ${port}`)
    }
});

