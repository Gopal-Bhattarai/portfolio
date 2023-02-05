import {Schema, model, models} from 'mongoose'


const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
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
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'author'
    },
}, {
    timestamps: true
})

const Blog = models?.Blog || model("Blog", blogSchema);

export default Blog;