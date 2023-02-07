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
            type: String,
        },
        secondary: {
            type: String, 
        }
    },

    address: {
        street: {
            type: String,
        },
        city: {
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
        facebook: {
            type: String,
        },
        instagram: {
            type: String,
        },
        linkedin: {
            type: String,
        },
        twitter: {
            type: String,
        },
        github: {
            type: String,
        }
    },
    proficiency: {
        item1:{
            key:{
                type: String
            },
            value:{
                type: String
            },
        },
        item2:{
            key:{
                type: String
            },
            value:{
                type: String
            },
        },
        item3:{
            key:{
                type: String
            },
            value:{
                type: String
            },
        },
        item4:{
            key:{
                type: String
            },
            value:{
                type: String
            },
        },
    },
    skills: {
        type: Object
    },
    portfolio: {
        type: Object,
    },
    clients: {
       type: Object,
    },
    experiences:{
        type: Object
    }
}, {
    timestamps: true
})

const Candidate = models?.Candidate || model("Candidate", candidateSchema);

export default Candidate;