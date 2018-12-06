const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

// send static file
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});