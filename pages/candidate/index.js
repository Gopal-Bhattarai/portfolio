import { useContext, useState } from "react";

import { AlertContext } from "@/components/state/AlertContext";
import PersonalInfo from "@/components/candidate/PersonalInfo";
import ContactInfo from "@/components/candidate/ContactInfo";
import JobDescription from "@/components/candidate/JobDescription";
import SocialLinks from "@/components/candidate/SocialLinks";
import ProficiencyInfo from "@/components/candidate/ProficiencyInfo";
import SkillsInfo from "@/components/candidate/SkillsInfo";

const initialValues = {
  name: "",
  profession: "",
  email: {
    primary: "",
    secondary: "",
  },
  phone: {
    primary: "",
    secondary: "",
  },
  address: {
    street: "",
    city: "",
  },
  description: "",
  sociallink: {
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    github: "",
  },
  proficiency: {
    item1: {
      key: "",
      value: "",
    },
    item2: {
      key: "",
      value: "",
    },
    item3: {
      key: "",
      value: "",
    },
    item4: {
      key: "",
      value: "",
    },
  },

  // skills: [],
  //   portfolio: [{}],
  //   clients: [{}],
  //experiencies;[{}]
};

const labelcss = " w-48 ";
const controlcss = "w-full md:w-1/2 m-2 px-2";

const NewCandidate = () => {
  const { setAlertValue } = useContext(AlertContext);

  const [page, setPage] = useState(6);
  const [userId, setUserId] = useState("63e359f4bf70648bb43a0e61");

  const [portfolioFields, setPortfolioFields] = useState(1);
  const [clientFields, setClientFields] = useState(1);
  const [experiencesFields, setExperiencesFields] = useState(1);

  // const onSubmit = async (values) => {

  //   const formData = new FormData();
  //   formData.append("image", image);
  //   formData.append("data", JSON.stringify(values));

  //   try {
  //     const response = await fetch("/api/addcandidate", {
  //       method: "POST",
  //       body: formData,
  //     });
  //     await response.json();
  //     setAlertValue((e) => ({
  //       ...e,
  //       open: "block",
  //       title: "SENT",
  //       message: "Blog Posted Successfully!",
  //       color: "text-purple-600",
  //     }));
  //   } catch (error) {
  //     setAlertValue((e) => ({
  //       ...e,
  //       open: "block",
  //       title: "Sorry",
  //       message: "Server Error !",
  //       color: "text-red-600",
  //     }));
  //   }
  // };
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




      {/* <div className="portfolio">
        {(() => {
          let textfield = [];
          for (let i = 1; i <= portfolioFields; i++) {
            textfield.push(
              <div key={i}>
                <div className={`flex w-2/3 justify-end items-center relative`}>
                  <div className={labelcss}>
                    <label>{i}. Portfolio Name</label>
                  </div>
                  <input
                    className={controlcss}
                    type="text"
                    name={`portfolio.item${i}.name`}
                    placeholder="Portfolio Name "
                  />
                </div>

                <div className={`flex w-2/3 justify-end items-center relative`}>
                  <div className={labelcss}>
                    <label>{i}. Portfolio Value</label>
                  </div>
                  <input
                    className={controlcss}
                    type="text"
                    name={`portfolio.item${i}.value`}
                    placeholder="Portfolio values"
                  />
                </div>
              </div>
            );
          }
          return textfield;
        })()}
        <div className={`flex w-2/3 justify-end items-center relative`}>
          <span onClick={() => setPortfolioFields((c) => c + 1)}>
            Add more portfolio
          </span>
        </div>
      </div>

      <div className="clients">
        {(() => {
          let textfield = [];
          for (let i = 1; i <= clientFields; i++) {
            textfield.push(
              <div key={i}>
                <div className={`flex w-2/3 justify-end items-center relative`}>
                  <div className={labelcss}>
                    <label>{i}. Client Name</label>
                  </div>
                  <input
                    className={controlcss}
                    type="text"
                    name={`clients.item${i}.name`}
                    placeholder="Client Name "
                  />
                </div>

                <div className={`flex w-2/3 justify-end items-center relative`}>
                  <div className={labelcss}>
                    <label>{i}. Client Logo</label>
                  </div>
                  <input
                    className={controlcss}
                    type="text"
                    name={`clients.item${i}.logo`}
                    placeholder="Client Logo url"
                  />
                </div>

                <div className={`flex w-2/3 justify-end items-center relative`}>
                  <div className={labelcss}>
                    <label>{i}. Client URL</label>
                  </div>
                  <input
                    className={controlcss}
                    type="text"
                    name={`clients.item${i}.url`}
                    placeholder="Client Website url"
                  />
                </div>

                <div className={`flex w-2/3 justify-end items-center relative`}>
                  <div className={labelcss}>
                    <label>{i}. Is Current Client?</label>
                  </div>
                  <select
                    className={controlcss}
                    type="text"
                    name={`clients.item${i}.current`}
                    placeholder="Client Website url"
                  >
                    <option value={undefined}>Select</option>
                    <option value="1">Yes</option>
                    <option value="0">No, Previous Client</option>
                  </select>
                </div>
              </div>
            );
          }
          return textfield;
        })()}
        <div className={`flex w-2/3 justify-end items-center relative`}>
          <span onClick={() => setClientFields((c) => c + 1)}>
            Add more client
          </span>
        </div>
      </div>

      <div className="experiences">
        {(() => {
          let textfield = [];
          for (let i = 1; i <= experiencesFields; i++) {
            textfield.push(
              <div key={i}>
                <div className={`flex w-2/3 justify-end items-center relative`}>
                  <div className={labelcss}>
                    <label>{i}. Job Title</label>
                  </div>
                  <input
                    className={controlcss}
                    type="text"
                    name={`experiences.item${i}.jobTitle`}
                    placeholder="Job Title "
                  />
                </div>

                <div className={`flex w-2/3 justify-end items-center relative`}>
                  <div className={labelcss}>
                    <label>{i}. Job Description</label>
                  </div>
                  <input
                    className={controlcss}
                    type="text"
                    name={`experiences.item${i}.jobDescription`}
                    placeholder="Job Description"
                  />
                </div>

                <div className={`flex w-2/3 justify-end items-center relative`}>
                  <div className={labelcss}>
                    <label>{i}. Employer</label>
                  </div>
                  <input
                    className={controlcss}
                    type="text"
                    name={`experiences.item${i}.companyName`}
                    placeholder="Company Name"
                  />
                </div>

                <div className={`flex w-2/3 justify-end items-center relative`}>
                  <div className={labelcss}>
                    <label>{i}. Employer URL</label>
                  </div>
                  <input
                    className={controlcss}
                    type="text"
                    name={`experiences.item${i}.companyUrl`}
                    placeholder="Company URL"
                  />
                </div>

                <div className={`flex w-2/3 justify-end items-center relative`}>
                  <div className={labelcss}>
                    <label>{i}. Employer Logo</label>
                  </div>
                  <input
                    className={controlcss}
                    type="text"
                    name={`experiences.item${i}.companyLogo`}
                    placeholder="Company Logo"
                  />
                </div>

                <div className={`flex w-2/3 justify-end items-center relative`}>
                  <div className={labelcss}>
                    <label>{i}. Start Date</label>
                  </div>
                  <input
                    className={controlcss}
                    type="text"
                    name={`experiences.item${i}.startDate`}
                    placeholder="Job started date"
                  />
                </div>

                <div className={`flex w-2/3 justify-end items-center relative`}>
                  <div className={labelcss}>
                    <label>{i}. End Date</label>
                  </div>
                  <input
                    className={controlcss}
                    type="text"
                    name={`experiences.item${i}.endDate`}
                    placeholder="Job ended date"
                  />
                </div>
              </div>
            );
          }
          return textfield;
        })()}
        <div className={`flex w-2/3 justify-end items-center relative`}>
          <span onClick={() => setExperiencesFields((c) => c + 1)}>
            Add more experiences
          </span>
        </div>
      </div> */}

      {/* <div className=" mt-8 w-2/3 flex justify-end items-center relative">
        <button
          className="bg-purple-500 hover:bg-purple-300 hover:text-white py-3 px-4 border-2 border-purple-500 rounded"
          type="submit"
        >
          Submit
        </button>
      </div> */}
    </div>
  );
};

export default NewCandidate;
