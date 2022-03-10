const mongoose=require('mongoose');
require('dotenv').config( {path: 'var.env'} );

const connectDB = async()=>{


    try {

        await mongoose.connect(process.env.MONGO_DB,{
           
        })

        console.log('Base de datos conectada')

    } catch (error) {

        console.log(error);
        process.exit(1);
    }
}

module.exports=connectDB