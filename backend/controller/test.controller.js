const { testService } = require("../service")


exports.createTest = async (req, res) => {
    try {
        const response = await testService.createTest(req)

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

exports.getAllTests = async (req, res) => {
    try {
        const response = await testService.getAllTests(req)

        if (response === 404) {
            return res.status(404).json({ message: 'No Test Found' })
        }
        else {
            return res.status(200).json(response)
        }



    } catch (err) {
        console.log(err)
        return err
    }
}

exports.getTest = async (req, res) => {
    try {
        const response = await testService.getTest(req)
        if (response === 404) {
            return res.status(404).json({ message: 'No Test Found' })
        }
        else {
            return res.status(200).json(response)
        }

    } catch (err) {
        console.log(err)
        return err
    }
}

exports.updateTest = async (req, res) => {
    try {
        
        const response = await testService.updateTest(req)

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