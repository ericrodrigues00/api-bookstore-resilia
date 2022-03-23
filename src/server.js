const express = require("express");
const sequelize = require("./database/index");
const adressRoute = require("./routes")




const port = 3000;
const app = express();
app.use(express.json())

sequelize.sync().then(() => {
    console.log(`database is running`);
})
app.use(adressRoute)
app.listen(port, () => {
 console.log(`Servidor rodando na porta ${port}`);
})

