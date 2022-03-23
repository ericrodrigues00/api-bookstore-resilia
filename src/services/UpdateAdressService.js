const Adress = require("../models/enderecoClienteModel")

module.exports = {
    async execute(id, newstreet_name) {
        
        const adress = await Adress.findByPk(id);

        if (adress == null) {
            throw new Error("Could not update adress")
        }

        adress.street_name = newstreet_name;

        await adress.save()

        return adress
    }
}