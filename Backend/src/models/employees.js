import mongoose from 'mongoose';

const employeesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 250,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20, 
        trim: true,
        unique: true,
        lowercase: true
    },
    salary: {
        type: Number,
        required: true
    }
},
{timestamps: true});



const Employees = mongoose.model('employees', employeesSchema);

export default Employees;