const { Questions, Tests } = require("../model")


exports.createTest = async(req) => {
    try{
        const {testName, instructions, duration} = req.body
        const id = req.id
        const role = req.role

        if(role !== 'admin'){
            return 409
        }
        else{
            const newTest = await new Tests({
                testName,
                duration,
                instructions,
                admin: id
            })
            await (await newTest.save()).populate("admin", "name email")
            console.log(newTest)
            return newTest
        }

    }catch(err){
        console.log(err)
        return err
    }
}

exports.getAllTests = async (req) => {
    try{
        const id = req.id
        const role = req.role
        console.log(role)

        if(role === 'user'){
            
            const alltests = await Tests.find().sort({createdAt: -1}).populate('admin', "name email" )
            if(alltests.length > 0){
                return alltests
            }
            else{
                return 404
            }
        }

        else if(role === 'admin'){
            const tests = await Tests.find({admin: id}).sort({createdAt: -1})
            if(tests.length > 0){
                const totalTests = tests.length
                return {totalTests, tests}
            }
            else{
                return 404
            }
        }

    }catch(err) {
        console.log(err)
        return err
    }


}

exports.getTest = async (req) => {
    try{
        const id = req.id
        const role = req.role
        const {testId} = req.params
        console.log(role)
            
            const test = await Tests.find({_id: testId}).populate('admin', "name email" )
            if(test.length > 0){
                return test
            }
            else{
                return 404
            }

    }catch(err) {
        console.log(err)
        return err
    }


}

exports.updateTest = async(req) => {
    try{
        
        const {testId, testName, instructions, duration} = req.body
        const id = req.id
        const role = req.role

        if(role !== 'admin'){
            return 409 
        }
        else{
            const updatedTest = await  Tests.findByIdAndUpdate({_id: testId}, {
                testName,
                duration,
                instructions
            }, {new: true})
            
            console.log(updatedTest)
            return updatedTest
        }

    }catch(err){
        console.log(err)
        return err
    }
}

exports.updateMarks = async (payload) => {
    try{
        console.log(payload)
        const testId = payload

        let totalMarks = await Questions.aggregate([{
            $group: {
               _id: "$testId",
               totalMarks: { $sum: '$marks' }
            }
            }])

        totalMarks?.map( async (i) => {
           const updatedMarks = await Tests.findByIdAndUpdate({_id: i?._id}, {totalMarks: i?.totalMarks}, {new: true})
        })

         

    }catch(err){
        console.log(err)
        return err
    }
}
