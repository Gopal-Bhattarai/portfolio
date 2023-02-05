import { initMongoose } from "@/lib/connectdb";
import Blog from "@/model/blog";
import nextConnect from 'next-connect';
import multer from 'multer';

const upload = multer({
    storage: multer.diskStorage({
      destination: './public/image',
      filename: function (req, file, cb) {
        const newFileName = Math.floor(new Date().getTime()) + file.originalname;
        req.newfilename = newFileName
        cb(null, newFileName)
      }
    }),
    fileFilter: (req, file, cb) =>{
      if(file.originalname.match(/\.(JPG|JPEG|jpg|jpeg|PNG|png|gif|GIF|BMP|bmp)$/)){
          cb(null,true);
      }else {
          cb(null,false);
          return cb(new Error('Only .png, .jpg .jpeg, .gif or bmp format allowed'));
      }
  }
  });


  const apiRoute = nextConnect({
    onError(error, req, res) {
      res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
      res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
  });
  
  apiRoute.use(upload.single('image'));
  
  apiRoute.post(async (req, res) => {

    const image = req.newfilename
    await initMongoose();
    const {title, meta, description} = req.body;
    console.log(req.body)

    const newBlog = await Blog.create({ title, meta, description, image })
    console.log(newBlog)

    res.status(201).json( newBlog  )
  });
  
  export default apiRoute;
  
  export const config = {
    api: {
      bodyParser: false, // Disallow body parsing, consume as stream
    },
  };

