const { questionService } = require("../service")


exports.createQuestion = async (req, res) => {
    try {
        const response = await questionService.createQuestion(req)

        if (response === 409) {
            return res.status(409).json({ message: "Unauthorized" })
        }

        else {
            return res.status(200).json(response)
        }

    } catch (err) {
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.getAllQuestions = async (req, res) => {
    try {
        const response = await questionService.getAllQuestions(req)
        if (response === 404) {
            return res.status(404).json({ message: 'No question Found' })
        }
        else {
            return res.status(200).json(response)
        }



    } catch (err) {
        console.log(err)
        return err
    }
}

exports.updateQuestion = async (req, res) => {
    try {
        
        const response = await questionService.updateQuestion(req)

        if (response === 409) {
            return res.status(409).json({ message: "Unauthorized" })
        }

        else {
            return res.status(200).json(response)
        }

    } catch (err) {
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.deleteQuestion = async (req, res) => {
    try {
        
        const response = await questionService.deleteQuestion(req)

        if (response === 409) {
            return res.status(409).json({ message: "Unauthorized" })
        }

        else {
            return res.status(200).json(response)
        }

    } catch (err) {
        console.log(err)
        return res.status(500).send(err)
    }
}