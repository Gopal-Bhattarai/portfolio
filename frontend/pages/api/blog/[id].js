import { initMongoose } from "@/lib/connectdb";
import Blog from "@/model/blog";

export default async function handler(req, res){

    
    try {
        await initMongoose();

        const {id} = req.query;
    
        const blog = await Blog.find({ _id: id})
    
        res.status(200).json(...blog)
    } catch (error) {
        res.status(500).json({ error: 'Internal | Server Error'})
    }


}
