import { initMongoose } from "@/lib/connectdb"
import Candidate from "@/model/candidate";

export default async function handler(req, res) {

    const {candidateId} = req.query;


    try {
        await initMongoose();

        const candidate = await Candidate.findOne({_id: candidateId});

        res.status(200).json(candidate)
    } catch (error) {
        console.log(error)
    }

  }
  