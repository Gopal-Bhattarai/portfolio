import {Schema, model, models} from 'mongoose'


const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    meta: {
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
    rating:{
        type: Number
    },
}, {
    timestamps: true
})

const Blog = models?.Blog || model("Blog", blogSchema);

export default Blog;