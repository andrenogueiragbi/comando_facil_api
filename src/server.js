const express = require('express')
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require("./config/swagger.json")
const quickStartDB = require('../src/controller/quickStartDB');


require('./database')

const app = express();

app.use(express.json())
app.use(morgan('combined'));
app.use(cors());



app.use(routes);

quickStartDB.ckeckType()
quickStartDB.ckeckUser()

app.listen(process.env.PORT || 5000, () =>{
    console.log("Rodando http na porta 5001 \\O/.");
})