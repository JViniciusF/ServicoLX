const { Category } = require('../models/Categories')

const AddCategory = async (name, img) => {
    try {
        return await Category.create({
            name: name,
            img: img
        });
    } catch (error) {
        throw { 
            msg: `error: Erro ao inserir no DB ${error}`,
            status:true,
            obj: error
        }
    }
}

const GetAllCategoriesBusiness = async () => {
    try {
        return Category.find({})
    } catch (error) {
        throw { 
            msg: `error: Erro ao resgatar as categorias do DB ${error}`,
            status:true,
            obj: error
        }
    }
}

module.exports = { AddCategory, GetAllCategoriesBusiness }