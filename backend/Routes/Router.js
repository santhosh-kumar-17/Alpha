const express = require('express')
const router = express.Router()
const nodemailer = require("nodemailer");

const OtpVerify = require('../Schema/otpVerify') 
const User=require('../Schema/UserSchema')



const config = {
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
      user: "22mx222@psgtech.ac.in",
      pass: "lasc dhuz sxqd wbwe",
  },
};

const transporter = nodemailer.createTransport(config);



router.post('/generateOtp', async (req, res) => {
  const generateRandomOtp = () => Math.floor(10000 + Math.random() * 9000);
  const otp = generateRandomOtp();

  req.body = {
    Email: req.body.Email,
    Otp: otp
  };


  const addOtp = new OtpVerify(req.body);

  let mailOptions = {
    from: '22mx222@psgtech.ac.in',
    to: req.body.Email,
    subject: 'Otp Verification for Application',
    text: `OTP for verification: ${otp}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  try {
    await addOtp.save();
    res.json({
      status: 'Success',
      data: {
        message: "Otp set"
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: err
    });
  }
});






//signup
router.post('/Sign-up', async (req, res) => {
  const { email, Otp, password, name, phone } = req.body;

  try {
    // Use the email parameter to query the database
    const user = await OtpVerify.find({ Email: email });``
    console.log(user);
    const userFind=await User.find({email:email})
    
    if(userFind[0].email!=email)
    {
    if (user[0].Otp == Otp) {
      const userRegister = new User({
        name: name,
        email: email,
        phone: phone,
        password: password,
      });

      await userRegister.save();
      console.log(userRegister);

      res.status(201).json({
        status: 'Success',
        data: {
          message: 'User added successfully',
        },
      });

      await OtpVerify.deleteOne({ Email: email });
    } else {
      console.log('otp did not match');
    }
  }else
  {
    res.json({
      status: 'Success',
      data: {
        message: 'User already Existed',
      },
    });

  }
  } catch (err) {
    console.log(err)
    res.status(500).json({
      status: 'Failed',
      message: err.message,
    });
  }
});



//login
router.get('/Log-in', async (req, res) => {
  const { email,password } = req.query;

  try {
    // Use the name parameter to query the database
    const user= await User.find({ email: email });
  
    const value=user[0]._id.toString()
    if(user[0].email==email)
    {
    if(user[0].password == password)
    {
    res.status(200).json({
      status: 'Success',
      data: {
        user,
      },
    });
    }
    else{
      console.log('password mismatch')
    }
  }
  else{
    res.json({
      status: 'Success',
      data: {
        message:"User not registered yet"
      },
    });

  }
  } catch (err) {
    console.log("failed")
    res.status(500).json({
      status: 'Failed',
      message: err.message,
      respone:"Invalid User"
    });
  }
});

  module.exports =router