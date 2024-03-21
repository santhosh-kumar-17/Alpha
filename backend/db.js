const mongoose = require('mongoose')



mongoose.connect("mongodb://syed:syed@ac-8nunpx8-shard-00-00.6ayf2zu.mongodb.net:27017,ac-8nunpx8-shard-00-01.6ayf2zu.mongodb.net:27017,ac-8nunpx8-shard-00-02.6ayf2zu.mongodb.net:27017/Navsgram?ssl=true&replicaSet=atlas-k0i5mf-shard-0&authSource=admin&retryWrites=true&w=majority").then(() =>{
    console.log('Database connected..')
})
    
