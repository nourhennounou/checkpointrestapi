const express = require('express')
const app = express()
const User = require ('./Models/User')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()
app.use(express.json())


mongoose.connect(process.env.MONGO_URI).then(res=>{
 console.log("db successfuly connect")
})
//GET method
router.get('/', async (req, res) => {

    try {
        const dataUser = await User.find()
    } catch (error) {
        console.log(error)
        
    }
    
})

//POST method
    router.post("/add", async (req, res) => {
    try {

        const newUser = new User(req.body)
        await newUser.save()
        res.send({ msg: "user added successfully", newUser })
    } catch (error) {
        console.log(error);
        res.end()
    }
})

// DELETE user


router.delete("/:idDelete",async(req, res)=>{
    try {
       const userDelete = await User.deleteOne({_id:req.params.idDelete})
    res.send({ msg: "user deleted ", userDelete})
    
    } catch (error) {
        console.log(error);
    }
    })
    
    //PUT user

    app.put('/edit/:id', async (req,res) => {
        try {
           const editUser = await User.findByIdAndUpdate({_id:req.params.id}) 
        } catch (error) {
            console.log(error)
            
        }
    })
    

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))