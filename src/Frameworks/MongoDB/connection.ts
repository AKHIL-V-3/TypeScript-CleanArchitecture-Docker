import mongoose, { ConnectOptions } from "mongoose"
import getConfig from "../../config";



export function Mongoose() {

  const config = getConfig()
  const mongoURI: string = config.database.url

  const Connections = {
    autoIndex: false,
    connectTimeoutMS: 1000,
  }

  return () => {

    mongoose.connect(mongoURI, Connections as ConnectOptions)
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch(error => {
        console.error('Error connecting to MongoDB:', error);
      });

  }


}














// import { model, Schema, Document, Model } from 'mongoose';
// import { userEntity } from '../../entities/userEntity';

// export interface UserDocument extends userEntity, Document {}

// const UserSchema = new Schema<UserDocument>({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   password:{type: String,required:true}
// });

// export const UserModel: Model<UserDocument> = model('User', UserSchema);

