const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    Name: { type: String, required: true},
    Email: { type: String, required: true, unique: true},
    Password: { type: String, required: true},
    Phone: { type: String, required: true},
   
    Age: {type: Number,
        validate: {
            validator: function(value){
                return value >=18 && value <= 100
            },
            message: 'Age must be between 18 and 100',
                
            },
        },
       
    }, {timestamps: true, versionKey: false} );

    const UserModel = mongoose.model('users', UserSchema);
    module.exports = UserModel;