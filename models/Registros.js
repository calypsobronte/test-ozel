import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs"

const RegistrosSchema = new Schema({
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    dni: {
        type: Number
    }, 
    password: {
        type: String
    },
    create: { 
        type: Date, 
        default: Date.now
    },
    update: { 
        type: Date
    }
});


RegistrosSchema.statics.encryptPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10);
    return await bcryptjs.hash(password, salt);
};

RegistrosSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcryptjs.compare(password, receivedPassword)
};

export default model("Registros", RegistrosSchema);