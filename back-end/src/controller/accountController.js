const { RegisterAccount, LoginAccount, SetNewLocation, RegisterAccountByGoogle, LoginAccountByGoogle,GetAccountById } = require('../Business/accountBusiness')

const LoginControllerByGoogle = async (req, res) => {
    let { 
        address,
        coords,
        user
    } = req.body;

    try {
        const account = await RegisterAccountByGoogle(address, coords, user);

        if (account.error) {
            return res.status(500).json({"error": `${account.msg}`})
        }
        return res.json(account)
        
    } catch (error) {
        try {

            if (error.obj.name == 'MongoError' && error.obj.stack.includes('duplicate')) {
                account = await LoginAccountByGoogle(user.id);
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

const LoginController = async (req, res) => {
    let user = req.body;
    try {
        const account = await LoginAccount(user);

        if (account.error) {
            return res.status(500).json({"error": `${account.msg}`})
        }

        return res.json(account)
        
    } catch (error) {
        return res.status(500).json({"error": `${error.obj}`})
    }
};

const RegisterController = async (req, res) => {
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
        return res.status(500).json({"error": `${error.obj}`})
        
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

const GetAccountController = async(req,res)=>{
    let{userId} = req.body
    try {
        const account = await GetAccountById(userId);
        return res.json(account)
    } catch (error) {
        return res.status(500).json({"error": `${error.obj}`})
    }
} 


module.exports = { LoginController, SetLocationController,LoginControllerByGoogle,RegisterController,GetAccountController};