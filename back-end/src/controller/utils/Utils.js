
const ListingResponse = async (list, colunm) => {
    try {
        let newList = [];
        let tmpList = [];
        list.map(item => {
            tmpList.push(item);
            if (tmpList.length === colunm) {
                newList.push(tmpList);
                tmpList = [];
            }
        })
        if (tmpList.length > 0) {
            newList.push(tmpList);
            tmpList = [];
        }

        return newList;
        
    } catch (error) {
        throw { 
            msg: `error: Erro ao ordenar a lista ${error}`,
            status:true,
            obj: error
        }
    }
}

module.exports = { ListingResponse }