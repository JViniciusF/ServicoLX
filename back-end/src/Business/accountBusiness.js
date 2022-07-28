const Account = require('../models/Account')
const bcrypt = require("bcrypt");

const RegisterAccountByGoogle = async (address, coords, user) => {
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
            googleId: user.sub,
            name: user.given_name,
            lastName: user.family_name,
            avatarUrl: user.picture,
            email: user.email,
            address: addressObj,
            location: locationObj,
            favoriteList: []         
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

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);

    try {
        account = await Account.create({
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            password:hashedPassword,
            address: addressObj,
            location: locationObj,
            avatarUrl:'data:image/png;base64,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',
            favoriteList: []         
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

const LoginAccount = async (user) => {
    try {
        let account = await Account.findOne({ email: user.email })
        if (!account) {
            throw { 
                msg: `error: Não foram encontrados usuários com esse ID`,
                status: true
            }
        }
        let validPassword = await bcrypt.compare(user.password, account.password)

        if (!validPassword){
            throw { 
                msg: `error: Erro no Login`,
                status: true
            }
        }
        return account.toJSON()

    } catch (error) {
        throw { 
            msg: `error: user not found ${error}`,
            status:true,
            obj: error
        }
    }
}


const LoginAccountByGoogle = async (googleId) => {
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

const SetNewLocation = async (address, coords, userId) => {
    try {
        let addressObj = [{
            street: address[0].street,
            number: address[0].name,
            district: address[0].district,
            city: address[0].city ? address[0].city : address[0].subregion,
            state: address[0].region,
            country: address[0].country,
            postalCode: address[0].postalCode, 
        }];
    
        let locationObj = [
            {
                name: "Localidade inicial",
                type: "Point",
                coordinates: [coords.latitude, coords.longitude]
            }
        ];

        let user = await Account.findOneAndUpdate({ _id: userId }, {'$set': {address: addressObj, location: locationObj}});

        return user;
    } catch (error) {
        throw { 
            msg: `error: Erro ao registrar nova localização ao usuário ${error}`,
            status:true,
            obj: error
        }
    }
}



module.exports = { RegisterAccount, LoginAccount, GetAccountById, SetNewLocation ,RegisterAccountByGoogle,LoginAccountByGoogle}