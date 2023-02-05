import {Schema, model, models} from 'mongoose'


const categorySchema = new Schema({
    title:{
        type: String,
        required: true
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

const Category = models?.Category || model("Category", categorySchema);

export default Category;