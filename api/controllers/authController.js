const User = require('../models/User');
const bcrypt = require("bcrypt");

const login = async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json("user not found");

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("wrong password")

        res.status(200);
    }
    catch(error){
        res.status(500).json(error);
    }
}

const signUp = async (req, res) => {
    try{
        //generate new password
        console.log('request received');
        console.log(req.body);
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password.data, salt);
        console.log('hashed = '+hashedPassword);

        const newUser = new User({
            username : req.body.username,
            email: req.body.email,
            password: req.body.hashedPassword,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json(error)
    }
}

module.exports = {login, signUp};