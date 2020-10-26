const { AddCategory, GetAllCategoriesBusiness } = require('../Business/categoryBusiness');
const { ListingResponse } = require('./utils/Utils')


const NewCategoryController = async (req, res) => {
    let { 
        name,
        img
    } = req.body;

    try {
        const category = await AddCategory(name, img);

        if (!category) {
            return res.status(500).json({"error": `Não foi possível salvar a nova categoria ${error}`})
        }

        return res.json(category); 

    } catch (error) {
        return res.status(500).json({"error": `Não foi possível salvar a nova categoria ${error.obj}`})
    }
};

const GetAllCategoriesController = async (res) => {
    try {
        let categories = await GetAllCategoriesBusiness();

        if (!categories) {
            return res.status(500).json({"error": `Ocorreu um erro ao resgatar as categorias ${error.obj}`})
        }

        categories = await ListingResponse(categories, 2);

        if (categories.length === 0) {
            return res.status(500).json({"error": `Ocorreu um erro ao listar a response ${error.obj}`})
        }

        return res.json(categories); 
    } catch (error) {
        return res.status(500).json({"error": `Ocorreu um erro ao resgatar as categorias ${error.obj}`})
    }
};

module.exports = { NewCategoryController, GetAllCategoriesController };