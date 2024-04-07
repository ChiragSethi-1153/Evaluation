const { userService } = require("../service")


exports.getUsers = async (req, res) => {
    try{
        const response = await userService.getUsers(req)

        if(response === 404){
            return res.status(404).json({message: "not found"})    
        }

        else {
            return res.status(200).json(response)
        }

    }catch(err){
        console.log(err)
        return res.status(500).send(err)    
    }
}