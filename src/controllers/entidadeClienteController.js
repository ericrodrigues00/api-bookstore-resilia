const Adress = require("../models/enderecoClienteModel");
const {request, response} = require("express");


module.exports = {
    async all(request, response) {
        try {
            const adressClient = await Adress.findAll();
            response.status(200).json({adress:adressClient})
        } catch (err) {
            response.status(400).json("deu ruim")
        }
    }
}