const { createNewUser, loginUser } = require('../../models/userAuth/user.model')

async function httpPostSignup(req, res) {
    try {
        const info = req.body
        const result = await createNewUser(info);
        return res.json(result)

    } catch (err) {
        console.log(err.message)
        return res.status(400).json({ "err": err.message })
    }
}

async function httpPostLogin(req, res) {
    try {
        const info = req.body
        const result = await loginUser(info);
        console.log(result);
        return res.json(result)

    } catch (err) {
        console.log(err.message)
        return res.status(400).json({ "err": err.message })
    }
}

module.exports = {
    httpPostSignup,
    httpPostLogin,
}