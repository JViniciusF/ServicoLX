const { ModelAccount } = require('../Business/accountBusiness')

const AccountController = async (req, res) => {
    let { 
        address,
        coords,
        user
    } = req.body;

    const account = await ModelAccount(address, coords, user);

    if (account.error) {
        return res.status(500).json({"error": `${account.msg}`})
    }
    return res.json(account)
};


module.exports = AccountController;