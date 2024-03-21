// import "./consts"
const nodemailer = require("nodemailer");
const express = require("express");
const constants = require('./consts.js')
const app = express();


const config = {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "22mx128@psgtech.ac.in",
        pass: "vxli mnpw iktz unif",
    },
};

const transporter = nodemailer.createTransport(config);

module.exports=transporter
