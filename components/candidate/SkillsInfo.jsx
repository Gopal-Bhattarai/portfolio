import React, { useContext, useState } from "react";
import { AlertContext } from "../state/AlertContext";

const SkillsInfo = ({ userId, setPage }) => {
  const { setAlertValue } = useContext(AlertContext);
  const [skillFields, setSkillFields] = useState(1);
  const [skills, setSkills] = useState([{ key: "", value: "" }]);

  const addInputField = () => {
    setSkills([
      ...skills,
      {
        key: "",
        value: "",
      },
    ]);
  };

  const removeInputField = (index) => {
    const rows = [...skills];
    rows.splice(index, 1);
    setSkills(rows);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const list = [...skills];
    list[i][name] = value;
    setSkills(list);
  };

  const handleNextClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/editcandidate/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ skills }),
      });
      const json = await response.json();

      setPage();
      setAlertValue((e) => ({
        ...e,
        open: "block",
        title: "SENT",
        message: "Process Started",
        color: "text-purple-600",
      }));
    } catch (error) {
      setAlertValue((e) => ({
        ...e,
        open: "block",
        title: "Sorry",
        message: "Server Error !",
        color: "text-red-600",
      }));
    }
  };

  return (
    <div className="flex justify-center items-center  ">
      <div>
        <div className="flex justify-center items-center relative border-b-2 mb-4 pb-3 border-stone-400 ">
          <p className="text-5xl"> Your Skills</p>
        </div>
        <div className="flex flex-row justify-around border-b-2 mb-2 border-solid border-stone-100">
            <div className="lg:block  ">
                  <label className="lg:text-xl text-xs">Skill Title</label>
            </div>
            <div className="lg:block  ">
                  <label className="lg:text-xl text-xs">Skill Description</label>
            </div>
        </div>
        {skills.map((data, i) => {
          const { key, value } = data;
          return (
            <div key={i} className="flex lg:flex-row flex-col justify-between">
              <div className="lg:mx-8 mx-2 lg:w-96 w-auto lg:my-4 my-1">
                <input
                  className="lg:w-80 w-80"
                  type="text"
                  name="key"
                  placeholder="Skill Title (e.g Front-end)"
                  value={key}
                  onChange={(e) => handleChange(e, i)}
                />
              </div>

              <div className="lg:mx-8 mx-2 lg:w-96 w-auto lg:my-4 my-1">
                <input
                  className="lg:w-96 w-80"
                  type="text"
                  name="value"
                  placeholder="Skill Description (e.g HTML, CSS, Javascript...)"
                  value={value}
                  onChange={(e) => handleChange(e, i)}
                />
              </div>
              <div className="lg:mx-8 mx-2 lg:w-96 w-auto lg:my-4 my-1">
                {(skills.length!==1)? 
                        <div className="flex mx-2 justify-center items-center relative">
                            <button
                            onClick={removeInputField}
                            className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-1 px-2 border border-orange-500 text-center inline-flex items-center hover:border-transparent rounded "
                            >
                            X
                            </button>
                    </div>
                :''}
              </div>
            </div>
          );
        })}
        <div className={`flex justify-center items-center relative mt-4  `}>
          <button className="border-2 border-violet-300 hover:bg-violet-300 hover:text-white py-1 px-4 rounded" onClick={addInputField}>Add more skill</button>
        </div>

        <div className=" mt-10 flex justify-end items-center relative">
        <button
          onClick={handleNextClick}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 text-center inline-flex items-center hover:border-transparent rounded"
        >
          Next
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      </div>

    </div>
  );
};

export default SkillsInfo;
