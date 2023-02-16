import { useState } from "react";
import { useRouter } from "next/router";

import PersonalInfo from "@/components/candidate/PersonalInfo";
import ContactInfo from "@/components/candidate/ContactInfo";
import JobDescription from "@/components/candidate/JobDescription";
import SocialLinks from "@/components/candidate/SocialLinks";
import ProficiencyInfo from "@/components/candidate/ProficiencyInfo";
import SkillsInfo from "@/components/candidate/SkillsInfo";
import PortfolioInfo from "@/components/candidate/PortfolioInfo";
import ClientsInfo from "@/components/candidate/ClientsInfo";
import ExperiencesInfo from "@/components/candidate/ExperiencesInfo";
import ActivateCandidate from "@/components/candidate/ActivateCandidate";


const NewCandidate = () => {

  const router = useRouter();
  const [page, setPage] = useState(10);
  const [userId, setUserId] = useState('63e458d7946582c41aca26a3');

  return (
    <div className="container flex justify-center mt-4 lg:w-[1200px]">

      {page === 1 && (
        <PersonalInfo
          setPage={() => setPage(page + 1)}
          setUserId={(e) => setUserId(e)}
        />
      )}

      {page === 2 && userId && (
        <ContactInfo userId={userId} setPage={() => setPage(page + 1)} />
      )}

      {page === 3 && userId && (
        <JobDescription userId={userId} setPage={() => setPage(page + 1)} />
      )}

      {page === 4 && userId && (
        <SocialLinks userId={userId} setPage={() => setPage(page + 1)} />
      )}

      {page === 5 && userId && (
        <ProficiencyInfo userId={userId} setPage={() => setPage(page + 1)} />
      )}

      {page === 6 && userId && (
        <SkillsInfo userId={userId} setPage={() => setPage(page + 1)} />
      )}

      {page === 7 && userId && (
        <PortfolioInfo userId={userId} setPage={() => setPage(page + 1)} />
      )}

      {page === 8 && userId && (
        <ClientsInfo userId={userId} setPage={() => setPage(page + 1)} />
      )}

      {page === 9 && userId && (
        <ExperiencesInfo userId={userId} setPage={() => setPage(page + 1)} />
      )}

      {page === 10 && userId && (
        <ActivateCandidate userId={userId} setPage={() => setPage(page + 1)} />
      )} 

      {page === 11 && userId && (
        // router.push(`/candidate/${userId}`)
        window.location.href = `/candidate/${userId}`
      )}

      
    </div>
  );
};

export default NewCandidate;
