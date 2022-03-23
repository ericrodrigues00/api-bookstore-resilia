const Adress = require("../models/enderecoClienteModel");
const { v4: uuid } = require('uuid');

module.exports = {
    /**
     
     * @param {string} country 
     * @param {string} city 
     * @param {string} street_name 
     * @param {integer} number 
     
     * @returns Object
     */
    async execute(country, city, street_name, number) {
                
        const idHash = uuid();

        const adress = await Adress.create({
            id: idHash,
            country: country,
            city: city,
            street_name: street_name,
            number: number,
            
        })

        return adress
        
    }
}