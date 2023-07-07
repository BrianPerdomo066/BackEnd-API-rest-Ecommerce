import { user } from "../interfaces/user.interface";
import AuthModel from "../models/auth.model";

const registerNewUser = async (newUser: user) => {
    const userFound = await AuthModel.findOne({ email: newUser.email }); 

    if ( userFound ) {
        return 'USER_ALREADY_EXISTS';
    }

    const response = await AuthModel.create( newUser );
    
    return response
};


export {
    registerNewUser
};