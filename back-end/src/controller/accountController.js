const { RegisterAccount, LoginAccount } = require('../Business/accountBusiness')

const AccountController = async (req, res) => {
    let { 
        address,
        coords,
        user
    } = req.body;

    try {
        const account = await RegisterAccount(address, coords, user);

        if (account.error.status) {
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
                error: {
                    status:true,
                    obj: error.obj
                }
            }
        } catch (error) {
            return { 
                msg: `error: Erro ao inserir no DB ${error}`,
                error: {
                    status:true,
                    obj: error
                }
            }
        }
    }
};


module.exports = AccountController;