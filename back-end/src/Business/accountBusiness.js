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
            googleId: user.id,
            name: user.givenName,
            lastName: user.familyName,
            avatarUrl: user.photoUrl,
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