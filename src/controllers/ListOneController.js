const { request, response } = require("express")
const SearchAdressService = require("../services/SearchAdressService")

module.exports = {
    /**
     * Faz uma requisição à API, procurando por um título específico na base de dados
     * @param {request} request 
     * @param {response} response 
     */
    async handle(request, response) {
        try {
            const street_name = request.params.street_name;
            const adress = await SearchAdressService.searchLike(street_name)
            response.status(200).json({results: adress})
        } catch(err) {
            response.status(400).json({error: err.message})
        }
        
    }
}