require('dotenv').config();

const app = require('./app');
const PORT = process.env.PORT || 7777;

app.set('port', PORT);
app.listen(PORT, () => {
  console.log(`Express running → PORT ${PORT}`);
});
