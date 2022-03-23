const deleteAdressService = require("../services/DeleteAdressService");
const searchAdressService = require("../services/SearchAdressService");

module.exports = {
    async handle(request, response) {
        
        try {
            const id = request.params.id;
            const Adress = await searchAdressService.searchById(id)
            
            const AdressDeleted = await deleteAdressService.execute(id)
            response.status(202).json({
                "message": !!AdressDeleted,
                "Adress deleted": Adress})
        } catch(err) {
            response.status(404).json({error: err.message})
        }

    }
}
