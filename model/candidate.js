import {Schema, model, models} from 'mongoose'


const candidateSchema = new Schema({
    name:{
        type: String,
        required: true
    },

    profession: {
        type: String
    },

    email:{
        primary: {
            type: String,
        },
        secondary: {
            type: String, 
        }
    },

    phone: {
        primary: {
            type: String 
        },
        secondary: {
            type: String, 
        },
    },

    address: {
        Street: {
            type: String,
        },
        City: {
            type: String, 
        },
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
    sociallink:{
        type: Object 
    },
    proficiency: {
        type: Object
    },
    skills: {
        type: Object
    },
    portfolio: [{
        type: Object,
    }],
    clients: {
        current:[ {
            type: Object
        }],
        past: [{
            type: Object
        }]
    },
}, {
    timestamps: true
})

const Candidate = models?.Candidate || model("Candidate", candidateSchema);

export default Candidate;