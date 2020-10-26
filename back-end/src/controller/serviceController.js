const { GetAllServices } = require('../Business/serviceBusiness')

const GetAllServiceController = async (req, res) => {
    try {
        const ads = await GetAllServices()
        return res.json(ads) 
    } catch (error) {
        return { 
            msg: `error: Erro ao realizar 'GetAllServiceController' ${error}`,
            status: true,
            obj: error.obj
        }
    }

}

module.exports = { GetAllServiceController };