const UserModel = require("../user/user.model")

const authRouter = require("express").Router();


authRouter.post( '/api/users', async (req, res) => {
    try {
        const newUser = new UserModel(req.body); // Assuming req.body contains user data
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user', error });
    }
});


module.exports=authRouter;

