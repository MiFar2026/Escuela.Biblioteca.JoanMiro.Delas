// levantar el servidor. App.listen
const app = require ('./app.js');
require("dotenv").config();

const port = process.env.PORT || 5678 || 3333;
app.listen(port, () => {
  console.log(`escuchando en el puerto ${port}`);
});