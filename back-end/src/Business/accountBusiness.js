const { Account } = require('../models/Account')

const RegisterAccount = async (address, coords, user) => {
    let addressObj;
    let locationObj;
    let account;

    try {
        addressObj = [{
            street: address[0].street,
            number: address[0].name,
            district: address[0].district,
            city: address[0].city ? address[0].city : address[0].subregion,
            state: address[0].region,
            country: address[0].country,
            postalCode: address[0].postalCode, 
        }];
    
        locationObj = [
            {
                name: "Localidade inicial",
                type: "Point",
                coordinates: [coords.latitude, coords.longitude]
            }
        ];
    } catch (error) {
        throw { 
            msg: `error: Erro ao tratar os itens da requisição ${error}`,
            status:true,
            obj: error
        }
    }

    try {
        account = await Account.create({
            googleId: user.id,
            name: user.givenName,
            lastName: user.familyName,
            avatarUrl: user.photoUrl,
            email: user.email,
            address: addressObj,
            location: locationObj         
        });
    } catch (error) {
        throw { 
            msg: `error: Erro ao inserir no DB ${error}`,
            status:true,
            obj: error
        }
    }
    
    return account;
}

const LoginAccount = async (googleId) => {
    try {
        let account = await Account.findOne({ 'googleId': googleId })

        if (!account) {
            throw { 
                msg: `error: Não foram encontrados usuários com esse ID`,
                status: true
            }
        }
        return account.toJSON()
    } catch (error) {
        throw { 
            msg: `error: Erro ao inserir no DB ${error}`,
            status:true,
            obj: error
        }
    }
}

const GetAccountById = async (userId) => {
    try {
        return Account.findById(userId)
    } catch (error) {
        throw { 
            msg: `error: Erro ao resgatar o usuário no DB ${error}`,
            status:true,
            obj: error
        }
    }
}


module.exports = { RegisterAccount, LoginAccount, GetAccountById }