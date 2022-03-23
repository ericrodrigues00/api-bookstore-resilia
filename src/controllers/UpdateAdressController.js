const { request, response } = require("express")
const updateAdressService = require("../services/UpdateAdressService")

module.exports = {
    async handle(request, response) {
        try {
            const id = request.params.id;
            const newstreet_name = request.body.street_name;
    
            const updatedAdress = await updateAdressService.execute(id, newstreet_name)
            response.status(202).json({message: "Successfully updated",
            "Adress updated": updatedAdress})
        } catch(err) {
            response.status(400).json({error: err.message})
        }
    }
}