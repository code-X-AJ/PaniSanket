const { json } = require('express');
const User = require('./user.mongo')
const bcrypt = require('bcrypt')

async function createNewUser(info) {
    try {
        var { name, username, phone, password, email } = info;
        var existingUser = await User.findOne({ username })
        if (existingUser) {
            return { msg: "Username already used.", status: false }
        }
        existingUser = await User.findOne({ email })
        if (existingUser) {
            return { msg: "Email already used.", status: false }
        }
        else {
            let hashedPassword = await bcrypt.hash(password, 10);
            let user = await User.create({ name, username, phone, email, password: hashedPassword })
            delete user.password, delete user.phone;
            return { msg: "user created successfully", status: true, user }
        }
    } catch (error) {
        console.error(error);
    }
}

async function loginUser(info) {
    try {
        const { username, password, } = info;
        const existingUser = await User.findOne({ username })
        if (!existingUser) {
            return { msg: "Incorrect Username or password", status: false }
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordValid)
            return ({ msg: "Incorrect username or password", status: false })

        delete existingUser.password;
        return ({ status: true, user: existingUser })

    } catch (error) {
        console.error(error);
    }
}

module.exports = { createNewUser, loginUser }