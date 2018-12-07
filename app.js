const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');

const PORT_NUMBER = process.env.PORT || 8080;
const app = express();

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public/dist', { maxAge: '365d' }));

app.listen(PORT_NUMBER, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening at port ${PORT_NUMBER}`);
});
