const Adress = require("../models/enderecoClienteModel")
const CreateAdressService = require("../services/CreateAdressService")

module.exports = {
    async handle(request, response){
        try{
            const{ country, city, street_name, number} = request.body
           const adress= await CreateAdressService.execute(country, city, street_name, number)
            response.status(200).json(adress)
        }catch(erro){
            response.status(400).json({
                erro:"Isso é um erro."
            })
        }
    }
}