const Adress = require("../models/enderecoClienteModel")

module.exports = {
    async execute(id) {
        const deleteAdressById = await Adress.destroy({where: {id: id}})

        if(!deleteAdressById) {
            throw new Error("This Adress was not found on our database and could not be deleted")
        }
        
        return deleteAdressById
    }
}