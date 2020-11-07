const { RegisterAccount, LoginAccount, SetNewLocation } = require('../Business/accountBusiness')

const LoginController = async (req, res) => {
    let { 
        address,
        coords,
        user
    } = req.body;

    try {
        const account = await RegisterAccount(address, coords, user);

        if (account.error) {
            return res.status(500).json({"error": `${account.msg}`})
        }

        return res.json(account)
        
    } catch (error) {
        try {

            if (error.obj.name == 'MongoError' && error.obj.stack.includes('duplicate')) {
                account = await LoginAccount(user.id);
                return res.json(account) 
            }

            throw { 
                msg: `error: Erro ao inserir no DB ${error.obj}`,
                status:true,
                obj: error.obj
            }
        } catch (error) {
            return res.status(500).json({"error": `${error.obj}`})
        }
    }
};

const SetLocationController = async (req, res) => {
    let { 
        address,
        coords,
        userId
    } = req.body;

    try {
        const account = await SetNewLocation(address, coords, userId);

        return res.json(account)
    } catch (error) {
        return res.status(500).json({"error": `${error.obj}`})
    }
}



module.exports = { LoginController, SetLocationController };