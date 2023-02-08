import { initMongoose } from "@/lib/connectdb";
import Candidate from "@/model/candidate";

  
export default async function handler(req, res) {

    await initMongoose();

    const {editCandidateId} = req.query;
    const filter = { _id: editCandidateId }

    const {...rest} = req.body;
    const candidate = await Candidate.findOneAndUpdate( filter, { ...rest},{ //options
        strict: false, 
        new: true
      })
    
    
    console.log(candidate)

    res.status(201).json( candidate  )
  };

