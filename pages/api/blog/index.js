import { initMongoose } from "@/lib/connectdb";
import Blog from "@/model/blog";

export default async function handler(req, res){

    
    try {
        await initMongoose();
    
        const blogs = await Blog.find({ })
    
        res.status(200).json({blogs})
        
    } catch (error) {
        res.status(500).json({ error: 'Internal | Server Error'})
    }


}
