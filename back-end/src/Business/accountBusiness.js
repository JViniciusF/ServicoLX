const Account = require('../models/Account')

const ModelAccount = async (address, coords, user) => {
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
        return { 
            msg: `error: Erro ao tratar os itens da requisição ${error}`,
            error: true
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
        return { 
            msg: `error: Erro ao inserir no DB ${error}`,
            error: true
        }
    }
    
    return account;
}


module.exports = { ModelAccount }