const mongoose = require('mongoose')



// This is the schema of our collection like what we did in mysql for table
const OtpVerifySchema = new mongoose.Schema({
    Email :{
        type : String,
        required : true
    },
    Otp : {
        type : String,
        required : true
    },
    

})
const OtpVerify = mongoose.model('OtpVerify',OtpVerifySchema)
module.exports = OtpVerify