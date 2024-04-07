const { Users } = require("../model")

exports.getUsers = async (req) => {
    try{

        const search = req.query.search
        const page = req.query.page || 1
        const pageSize = req.query.pageSize || 2

        const skip = (page - 1) * pageSize
        const total = await Users.countDocuments()
        const pages = Math.ceil(total/pageSize)

        if(page > pages){
            return 404
        }
        const users = await Users.find().skip(skip).limit(pageSize)
        console.log(users)

        return users


    }catch(err){
        console.log(err)
        return err
    }
}