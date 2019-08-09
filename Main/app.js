const Users = require('../Models/models');


//Getting All User
exports.getUser = (req,res)=>{
    Users.find({}).then((data)=>{
        res.json(data);
    }).catch(err=>console.log(err));
}

//Inserting New User
exports.createUser = (req,res)=>{
    // return res.send(req.body);
    var user = new Users({Name:req.body.Name,Phone:req.body.Phone,Email:req.body.Email,Address:{Street:req.body.Street,Area:req.body.Area,City:req.body.City,Pincode:req.body.Pincode}});
    user.save().then((data)=>{    //Saving the Data into MongoDb
        res.json(data);
    }).catch(err=>console.log(err));
}

//Updating the User
exports.updateUser = (req,res)=>{

    Users.updateOne({Name:req.body.Name},{Phone:req.body.Phone}).then((data)=>{
        res.json(data.n);
    }).catch(err=>cosnoel.log(err));
}


//Deleting the User
exports.delUser = (req,res)=>{
    Users.deleteOne({Name:req.body.Name}).then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    })
}
