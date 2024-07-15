import mongoose from "mongoose"

export  const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://aakritimamgain26:AkRiTiMaMgAiN26@cluster0.ctcfp7g.mongodb.net/food').then(()=>console.log("DB CONNECTED"));
}