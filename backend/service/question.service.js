const Questions = require("../model/questions")
const { updateMarks } = require("./test.service")


exports.createQuestion = async(req) => {
    try{
        const {testId, question, option1, option2, option3, option4, correctOption, marks } = req.body
        const id = req.id
        const role = req.role

        if(role !== 'admin'){
            return 409
        }
        else{
            const newQuestion = await  new Questions({
                testId, 
                question, 
                option1, 
                option2, 
                option3, 
                option4, 
                correctOption, 
                marks
            })
            await newQuestion.save()
            console.log(newQuestion)
            updateMarks(testId)
            return newQuestion
        }

    }catch(err){
        console.log(err)
        return err
    }
}

exports.getAllQuestions = async (req) => {
    try{
        const testId = req.query.testId
        const id = req.id
        const role = req.role
        console.log(role)

        const search = req.query.search
        const page = req.query.page || 1
        const pageSize = req.query.pageSize 

        const skip = (page - 1) * pageSize
        const total = await Questions.find({testId: testId}).countDocuments()
        const pages = Math.ceil(total/pageSize)

        if(page > pages){
            return 404
        }

        if(role === 'user'){
            
            const allQuestions = await Questions.find({testId: testId}, "-correctAnswer").skip(skip).limit(pageSize).populate()
            if(allQuestions.length > 0){
                return alltests
            }
            else{
                return 404
            }
        }

        else if(role === 'admin'){
            const questions = await Questions.find({testId: testId}).sor({createdAt: -1}).skip(skip).limit(pageSize)
            if(questions.length > 0){
                return questions
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

exports.updateQuestion = async(req) => {
    try{
        
        const {questionId, question, option1, option2, option3, option4, correctOption, marks} = req.body
        const id = req.id
        const role = req.role

        if(role !== 'admin'){
            return 409 
        }
        else{
            const updatedTest = await  Questions.findByIdAndUpdate({_id: questionId}, {
                question, 
                option1, 
                option2, 
                option3, 
                option4, 
                correctOption, 
                marks
            }, {new: true})
            
            console.log(updatedTest)
            return updatedTest
        }

    }catch(err){
        console.log(err)
        return err
    }
}

exports.deleteQuestion = async(req) => {
    try{
        
        const {questionId} = req.params
        const id = req.id
        const role = req.role

        if(role !== 'admin'){
            return 409 
        }
        else{
            const Test = await  Questions.findByIdAndDelete({_id: questionId})
            
            console.log(Test)
            return Test
        }

    }catch(err){
        console.log(err)
        return err
    }
}