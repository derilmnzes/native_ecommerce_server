const mongoose = require('mongoose');



const schema = new mongoose.Schema({
email:{
    type:String,
    required:true
},
name:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
}
})


const Users = mongoose.model('users', schema);


module.exports = Users;


