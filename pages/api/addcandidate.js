import { initMongoose } from "@/lib/connectdb";
import Candidate from "@/model/candidate";
import nextConnect from 'next-connect';
import multer from 'multer';

const upload = multer({
    storage: multer.diskStorage({
      destination: './public/candidate',
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

  console.log('body',req.body)
  // console.log('data', req.data)

    const image = req.newfilename
    await initMongoose();
    const {name, ...rest} = JSON.parse(req.body.data);

    const newCandidate = await Candidate.create({name: name, image: image, ...rest})

    res.status(201).json( newCandidate  )
  });
  
  export default apiRoute;
  
  export const config = {
    api: {
      bodyParser: false, // Disallow body parsing, consume as stream
    },
  };
