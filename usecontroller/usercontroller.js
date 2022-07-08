const usercontroller = require("../modul/userschema")

module.exports = {
    User : async (req,res) => {
        const user = new usercontroller({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            place : req.body.place,
            phone : req.body.phone,
        })
        try {
                const a1 = await user.save()
                res.status(200).json({ message: "Success" })
            }catch(err) {
            res.status(500).json({ message: "Error saving" })
        }
    },
    getuser : async (req, res) => {
        try{
                const user =  await usercontroller.find()
            if(user){
                res.status(200).json({ message: "Success" , data: user })
            }else{
                res.status(500).json({ message: "Error saving" })
            }

        }catch(err){
            res.status(500).json({ message: "Error " })
        }
    },
    getSingleuser : async (req, res) => {
        // console.log(req.body)
        try {
            const user = await usercontroller.findById(req.params.id)
            if(user){
                res.status(200).json({ message: "Success" , data: user })
            }else{
                res.send({msg: "error"})
            }
        }catch(err){
            res.status(500).json({ message: "Error saving" })
        }  
        },
    updateuser : async (req, res) => {
        const data = new usercontroller({
            _id : req.body._id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            place : req.body.place,
            phone : req.body.phone,
        })
        try{
            const user = await usercontroller.updateOne({_id: req.params.id} ,data)
            if(user){
                res.status(200).json({ message: "update" ,data : user })
            }else{
                res.status(400).json({ message: " not update"  })
    
            }
        }catch(err){
            res.status(400).json({ message: " error"  })
        }
    },
    deleteuser : async (req, res) => {
        const data = new usercontroller({
            _id : req.body._id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            place : req.body.place,
            phone : req.body.phone,
        })
        try{
            const user = await usercontroller.deleteOne({_id: req.params.id} ,data)
            if(user){
                res.status(200).json({ message: "deleted"  })
            }else{
                res.status(400).json({ message: " not deleted"  })
    
            }
        }catch(err){
            res.status(400).json({ message: " error"  })
        }
        
    }
}