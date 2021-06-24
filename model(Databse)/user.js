const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const userscema=new mongoose.Schema({

    firstname:{
      type:  String,
    required:true,
    trim:true,
    min:3,
    max:20
    },

    lastname:{
        type:  String,
      required:true,
      trim:true,
      min:3,
      max:20
      },
      username:{
     type:  String,
      required:true,
      trim:true,
      unique:true,
      index:true,
      lowercase:true
      },
      email:
      {
        type:  String,
         required:true,
        trim:true,
        unique:true,
        lowercase:true

      },
      hash_passord:{ 
  
           type:String,
           required:true
      },
      role:
      {
          type:String,
          enum:['user','admin'],
          default:'admin'
      }
},{timestamps:true});


// for hasing
userscema.virtual('password').set(function(password)
{
    this.hash_passord=bcrypt.hashSync(password,10);

});
 
userscema.methods=
{
    authenticate:function(password){
        return bcrypt.compareSync(password,this.hash_password);

    }

}


module.exports=mongoose.model('User',userscema);
