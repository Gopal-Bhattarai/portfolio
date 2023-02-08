import { initMongoose } from "@/lib/connectdb"
import Candidate from "@/model/candidate";

export default async function handler(req, res) {

    try {
        await initMongoose();

        const candidates = await Candidate.find({});

        res.status(200).json(candidates)
    } catch (error) {
        res.status(500).json(error)
    }

  }
  