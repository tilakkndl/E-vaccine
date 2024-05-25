const dotenv = require("dotenv");
const mongoose = require("mongoose")

const app = require("./app")

dotenv.config({path: "./.config.env"});

console.log(process.env.PORT);

// Connect to MongoDB
mongoose.connect(process.env.DB_LINK).then(()=>{
    console.log('Databse connected successfully!');
}).catch((error)=>{
    console.log('Error:',error);
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
