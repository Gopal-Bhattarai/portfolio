import {Schema, model, models} from 'mongoose'


const candidateSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    profession: {
        type: String
    },
    email1:{
        type: String,
    },
    email2:{
        type: String,
    },
    phone1: {
        type: Number,
    },
    phone2: {
        type: Number,
    },
    address1: {
        type: String,
    },
    address2: {
        type: String,
    },
    image: {
        type: String,
    },
    description:{
        type: String,
    },
    active:{
        type: Boolean,
        default: 1
    },
    sociallink:[{
        type: String,
    }],
    proficiency: [{
        type: String,
    }],
    skills: [{
        type: String,
    }],
    portfolio: [{
        type: String,
    }],
    clients: [{
        type: String, 
    }]
}, {
    timestamps: true
})

const Candidate = models?.Candidate || model("Candidate", candidateSchema);

export default Candidate;