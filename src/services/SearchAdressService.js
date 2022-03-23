const sequelize = require("sequelize");
const Adress = require("../models/enderecoClienteModel");
const Op = sequelize.Op

module.exports = {
    async searchAdress(street_name) {
        
        const street_nameSearch = await Adress.findOne({where: {street_name: street_name}})

        return street_nameSearch
    },
    async searchLike(street_name) {
        const street_nameSearchLike = await Adress.findAll({where: {
            street_name: {
                [Op.substring]: street_name}
            }})
        
        if (street_nameSearchLike == null) {
            throw new Error("Adress not found")
        }
        
        return street_nameSearchLike

    },
    async searchById(id) {
        const searchAdressById = await Adress.findOne({where: {id: id}})

        return searchAdressById
    }
}