const Service = require('../models/Service')


const GetAllServices = async () => {
    try {
        let ads = await Service.find({});

        if (!ads) {
            throw { 
                msg: `error: Não foram encontrados Ads`,
                status: true
            }
        }
    } catch (error) {
        throw { 
            msg: `error: Erro ao executar a query no DB ${error}`,
            status: true,
            obj: error
        }
    }
}

module.exports = { GetAllServices }