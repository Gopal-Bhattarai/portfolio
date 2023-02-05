import {Schema, model, models} from 'mongoose'


const authorSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    email:{
        type: String,
    },
    phone: {
        type: Number,
    },
    address: {
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
}, {
    timestamps: true
})

const Category = models?.Category || model("Category", authorSchema);

export default Category;