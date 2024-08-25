import mongoose from "mongoose";

const subscribeSchema = new mongoose.Schema({
  mail: { 
    type: String, 
    required: true
    },
})

const SubscribeEmail = mongoose.models.subscribeemail  || mongoose.model("subscribeemail", subscribeSchema); 

export default SubscribeEmail;