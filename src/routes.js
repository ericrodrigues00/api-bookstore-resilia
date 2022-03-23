const express = require("express");
const clienteController = require("./controllers/entidadeClienteController");
const createAdressController = require("./controllers/createAdressController")
const listOneController = require("./controllers/ListOneController");
const deleteAdressController = require("./controllers/DeleteAdressController");
const updateAdressController = require("./controllers/UpdateAdressController");


const router = express.Router();

router.get("/adress", clienteController.all);
router.get("/adress/:street_name", listOneController.handle);
router.post("/adress", createAdressController.handle)
router.patch("/adress/:id", updateAdressController.handle)
router.delete("/adress/:id", deleteAdressController.handle);





module.exports = router;





