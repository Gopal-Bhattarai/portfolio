import { useContext, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { AlertContext } from "@/components/state/AlertContext";

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

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
});

const labelcss = " w-48 ";
const controlcss = "w-full md:w-1/2 m-2 px-2";

const newcandidate = () => {
  const { setAlertValue } = useContext(AlertContext);

  const [showSecondEmail, setShowSecondEmail] = useState("hidden");
  const [showSecondPhone, setShowSecondPhone] = useState("hidden");

  const [file, setFile] = useState("/assets/img/addImage.png");
  const [image, setImage] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [skillFields, setSkillFields] = useState(1);
  const [portfolioFields, setPortfolioFields] = useState(1);
  const [clientFields, setClientFields] = useState(1);
  const [experiencesFields, setExperiencesFields] = useState(1);

  const handleChange = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const files = document.getElementById("image");

    setImage(files.files[0]);

    setFile(URL.createObjectURL(files.files[0]));
    setIsSending(false);
    console.log(file);
  };

  const onSubmit = async (values) => {
  console.log(values)

    const formData = new FormData();
    formData.append("image", image);
    formData.append("data", JSON.stringify(values));

    try {
      const response = await fetch("/api/addcandidate", {
        method: "POST",
        body: formData,
      });
      await response.json();
      setAlertValue((e) => ({
        ...e,
        open: "block",
        title: "SENT",
        message: "Blog Posted Successfully!",
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
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form autoComplete="off">
          <h2 className="my-4">Input your details to create a portfolio</h2>

          <div className="w-2/3 flex justify-end items-center relative">
            <div className={labelcss}>
              <label>Full Name</label>
            </div>
            <Field
              className={controlcss}
              type="text"
              name="name"
              placeholder="name"
            />
          </div>

          <div className="w-2/3 flex justify-end items-center relative">
            <div className={labelcss}>
              <label>Profession</label>
            </div>

            <Field
              className={controlcss}
              type="text"
              name="profession"
              placeholder="Profession"
            />
          </div>

          <div className="w-2/3 flex justify-end items-center relative">
            <div className={labelcss}>
              <label>Image</label>
            </div>

            <input
              className={controlcss}
              type="file"
              name="image"
              id="image"
              accept="image/*"
              placeholder="image"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="w-2/3 flex justify-end items-center relative">
            <div className={labelcss}>
              <label>Primary Email</label>
            </div>

            <Field
              className={controlcss}
              type="text"
              name="email.primary"
              placeholder="Primary Email"
            />
            <p
              onClick={() =>
                setShowSecondEmail((v) => (v === "flex" ? "hidden" : "flex"))
              }
              src="/assets/img/AddAdditionalEmail.png"
              className="absolute mr-4 w-10 text-2xl font-extrabold cursor-pointer border-2 bg-purple-400 border-purple-500 text-white rounded-full flex justify-center "
              alt="Search Icon"
            >
              +
            </p>
          </div>
          <div
            className={`${showSecondEmail} w-2/3 justify-end items-center relative`}
          >
            <div className={labelcss}>
              <label>Secondary Email</label>
            </div>

            <Field
              className={controlcss}
              type="text"
              name="email.secondary"
              placeholder="Secondary Email"
            />
          </div>

          <div className="w-2/3 flex justify-end items-center relative">
            <div className={labelcss}>
              <label>Primary Phone</label>
            </div>

            <Field
              className={controlcss}
              type="text"
              name="phone.primary"
              placeholder="Primary Phone"
            />
            <p
              onClick={() =>
                setShowSecondPhone((v) => (v === "flex" ? "hidden" : "flex"))
              }
              src="/assets/img/AddAdditionalPhone.png"
              className="absolute mr-4 w-10 text-2xl font-extrabold cursor-pointer  bg-purple-400 text-white rounded-full flex justify-center "
              alt="Search Icon"
            >
              +
            </p>
          </div>
          <div
            className={`${showSecondPhone} w-2/3 justify-end items-center relative`}
          >
            <div className={labelcss}>
              <label>Secondary Phone</label>
            </div>

            <Field
              className={controlcss}
              type="text"
              name="phone.secondary"
              placeholder="Secondary Phone"
            />
          </div>

          <div className="w-2/3 flex justify-end items-center relative">
            <div className={labelcss}>
              <label>Street</label>
            </div>

            <Field
              className={controlcss}
              type="text"
              name="address.street"
              placeholder="Street Address"
            />
          </div>
          <div className={`flex w-2/3 justify-end items-center relative`}>
            <div className={labelcss}>
              <label>City</label>
            </div>

            <Field
              className={controlcss}
              type="text"
              name="address.city"
              placeholder="City, Country"
            />
          </div>

          <div className="w-2/3 flex justify-end items-center relative">
            <div className={labelcss}>
              <label>Job Description</label>
            </div>

            <Field
              className={controlcss}
              type="text"
              name="description"
              placeholder="About your expertise..."
            />
          </div>

          <div className={`flex w-2/3 justify-end items-center relative`}>
            <div className={labelcss}>
              <label>Facebook Link</label>
            </div>
            <Field
              className={controlcss}
              type="text"
              name="sociallink.facebook"
              placeholder="facebook link address"
            />
          </div>

          <div className={`flex w-2/3 justify-end items-center relative`}>
            <div className={labelcss}>
              <label>Instagram Link</label>
            </div>
            <Field
              className={controlcss}
              type="text"
              name="sociallink.instagram"
              placeholder="instagram link address"
            />
          </div>

          <div className={`flex w-2/3 justify-end items-center relative`}>
            <div className={labelcss}>
              <label>Linkedin Link</label>
            </div>
            <Field
              className={controlcss}
              type="text"
              name="sociallink.linkedin"
              placeholder="linkedin link address"
            />
          </div>

          <div className={`flex w-2/3 justify-end items-center relative`}>
            <div className={labelcss}>
              <label>Twitter Link</label>
            </div>
            <Field
              className={controlcss}
              type="text"
              name="sociallink.twitter"
              placeholder="twitter link address"
            />
          </div>

          <div className={`flex w-2/3 justify-end items-center relative`}>
            <div className={labelcss}>
              <label>Github Link</label>
            </div>
            <Field
              className={controlcss}
              type="text"
              name="sociallink.github"
              placeholder="github link address"
            />
          </div>

          <div className={`flex w-2/3 justify-end items-center relative`}>
            <div className={labelcss}>
              <label>1. Proficiency Key</label>
            </div>
            <Field
              className={controlcss}
              type="text"
              name="proficiency.item1.key"
              placeholder="Proficiency subject"
            />
          </div>

          <div className={`flex w-2/3 justify-end items-center relative`}>
            <div className={labelcss}>
              <label>1. Proficiency Values</label>
            </div>
            <Field
              className={controlcss}
              type="text"
              name="proficiency.item1.value"
              placeholder="Proficiency Value (0-100)"
            />
          </div>

          <div className={`flex w-2/3 justify-end items-center relative`}>
            <div className={labelcss}>
              <label>2. Proficiency Key</label>
            </div>
            <Field
              className={controlcss}
              type="text"
              name="proficiency.item2.key"
              placeholder="Proficiency subject"
            />
          </div>

          <div className={`flex w-2/3 justify-end items-center relative`}>
            <div className={labelcss}>
              <label>2. Proficiency Values</label>
            </div>
            <Field
              className={controlcss}
              type="text"
              name="proficiency.item2.value"
              placeholder="Proficiency Value (0-100)"
            />
          </div>

          <div className={`flex w-2/3 justify-end items-center relative`}>
            <div className={labelcss}>
              <label>3. Proficiency Key</label>
            </div>
            <Field
              className={controlcss}
              type="text"
              name="proficiency.item3.key"
              placeholder="Proficiency subject"
            />
          </div>

          <div className={`flex w-2/3 justify-end items-center relative`}>
            <div className={labelcss}>
              <label>3. Proficiency Values</label>
            </div>
            <Field
              className={controlcss}
              type="text"
              name="proficiency.item3.value"
              placeholder="Proficiency Value (0-100)"
            />
          </div>

          <div className={`flex w-2/3 justify-end items-center relative`}>
            <div className={labelcss}>
              <label>4. Proficiency Key</label>
            </div>
            <Field
              className={controlcss}
              type="text"
              name="proficiency.item4.key"
              placeholder="Proficiency subject"
            />
          </div>

          <div className={`flex w-2/3 justify-end items-center relative`}>
            <div className={labelcss}>
              <label>4. Proficiency Values</label>
            </div>
            <Field
              className={controlcss}
              type="text"
              name="proficiency.item4.value"
              placeholder="Proficiency Value (0-100)"
            />
          </div>

          <div className="skill">
            {(() => {
              let textfield = [];
              for (let i = 1; i <= skillFields; i++) {
                textfield.push(
                  <div key={i}>
                    <div className={`flex w-2/3 justify-end items-center relative`} >
                      <div className={labelcss}>
                        <label>{i}. Skill Name</label>
                      </div>
                      <Field
                        className={controlcss}
                        type="text"
                        name={`skills.item${i}.key`}
                        placeholder="Skill Name (e.g Front-end)" />
                    </div>

                    <div className={`flex w-2/3 justify-end items-center relative`}>
                      <div className={labelcss}>
                        <label>{i}. Skill values</label>
                      </div>
                      <Field
                        className={controlcss}
                        type="text"
                        name={`skills.item${i}.value`}
                        placeholder="Skill values (e.g HTML, CSS, Javascript...)"  />
                    </div>
                  </div>
                );
              }
              return textfield;
            })()}
            <div className={`flex w-2/3 justify-end items-center relative`}>
              <span onClick={()=>setSkillFields(c=>c+1)}>Add more skill</span>
            </div>
          </div>

          <div className="portfolio">
            {(() => {
              let textfield = [];
              for (let i = 1; i <= portfolioFields; i++) {
                textfield.push(
                  <div key={i}>
                    <div className={`flex w-2/3 justify-end items-center relative`} >
                      <div className={labelcss}>
                        <label>{i}. Portfolio Name</label>
                      </div>
                      <Field
                        className={controlcss}
                        type="text"
                        name={`portfolio.item${i}.name`}
                        placeholder="Portfolio Name " />
                    </div>

                    <div className={`flex w-2/3 justify-end items-center relative`}>
                      <div className={labelcss}>
                        <label>{i}. Portfolio Value</label>
                      </div>
                      <Field
                        className={controlcss}
                        type="text"
                        name={`portfolio.item${i}.value`}
                        placeholder="Portfolio values"  />
                    </div>
                  </div>
                );
              }
              return textfield;
            })()}
            <div className={`flex w-2/3 justify-end items-center relative`}>
              <span onClick={()=>setPortfolioFields(c=>c+1)}>Add more portfolio</span>
            </div>
          </div>

          <div className="clients">
            {(() => {
              let textfield = [];
              for (let i = 1; i <= clientFields; i++) {
                textfield.push(
                  <div key={i}>
                    <div className={`flex w-2/3 justify-end items-center relative`} >
                      <div className={labelcss}>
                        <label>{i}. Client Name</label>
                      </div>
                      <Field
                        className={controlcss}
                        type="text"
                        name={`clients.item${i}.name`}
                        placeholder="Client Name " />
                    </div>

                    <div className={`flex w-2/3 justify-end items-center relative`}>
                      <div className={labelcss}>
                        <label>{i}. Client Logo</label>
                      </div>
                      <Field
                        className={controlcss}
                        type="text"
                        name={`clients.item${i}.logo`}
                        placeholder="Client Logo url"  />
                    </div>

                    <div className={`flex w-2/3 justify-end items-center relative`}>
                      <div className={labelcss}>
                        <label>{i}. Client URL</label>
                      </div>
                      <Field
                        className={controlcss}
                        type="text"
                        name={`clients.item${i}.url`}
                        placeholder="Client Website url"  />
                    </div>

                    <div className={`flex w-2/3 justify-end items-center relative`}>
                      <div className={labelcss}>
                        <label>{i}. Is Current Client?</label>
                      </div>
                      <Field as = "select"
                        className={controlcss}
                        type="text"
                        name={`clients.item${i}.current`}
                        placeholder="Client Website url">
                          <option value={undefined}>Select</option>
                          <option value="1">Yes</option>
                          <option value="0">No, Previous Client</option>
                        </Field>
                    </div>
                  </div>
                );
              }
              return textfield;
            })()}
            <div className={`flex w-2/3 justify-end items-center relative`}>
              <span onClick={()=>setClientFields(c=>c+1)}>Add more client</span>
            </div>
          </div>

          <div className="experiences">
            {(() => {
              let textfield = [];
              for (let i = 1; i <= experiencesFields; i++) {
                textfield.push(
                  <div key={i}>
                    <div className={`flex w-2/3 justify-end items-center relative`} >
                      <div className={labelcss}>
                        <label>{i}. Job Title</label>
                      </div>
                      <Field
                        className={controlcss}
                        type="text"
                        name={`experiences.item${i}.jobTitle`}
                        placeholder="Job Title " />
                    </div>

                    <div className={`flex w-2/3 justify-end items-center relative`}>
                      <div className={labelcss}>
                        <label>{i}. Job Description</label>
                      </div>
                      <Field
                        className={controlcss}
                        type="text"
                        name={`experiences.item${i}.jobDescription`}
                        placeholder="Job Description"  />
                    </div>

                    <div className={`flex w-2/3 justify-end items-center relative`}>
                      <div className={labelcss}>
                        <label>{i}. Employer</label>
                      </div>
                      <Field
                        className={controlcss}
                        type="text"
                        name={`experiences.item${i}.companyName`}
                        placeholder="Company Name"  />
                    </div>

                    <div className={`flex w-2/3 justify-end items-center relative`}>
                      <div className={labelcss}>
                        <label>{i}. Employer URL</label>
                      </div>
                      <Field
                        className={controlcss}
                        type="text"
                        name={`experiences.item${i}.companyUrl`}
                        placeholder="Company URL"  />
                    </div>

                    <div className={`flex w-2/3 justify-end items-center relative`}>
                      <div className={labelcss}>
                        <label>{i}. Employer Logo</label>
                      </div>
                      <Field
                        className={controlcss}
                        type="text"
                        name={`experiences.item${i}.companyLogo`}
                        placeholder="Company Logo"  />
                    </div>

                    <div className={`flex w-2/3 justify-end items-center relative`}>
                      <div className={labelcss}>
                        <label>{i}. Start Date</label>
                      </div>
                      <Field 
                        className={controlcss}
                        type="text"
                        name={`experiences.item${i}.startDate`}
                        placeholder="Job started date" />
                    </div>

                    <div className={`flex w-2/3 justify-end items-center relative`}>
                      <div className={labelcss}>
                        <label>{i}. End Date</label>
                      </div>
                      <Field 
                        className={controlcss}
                        type="text"
                        name={`experiences.item${i}.endDate`}
                        placeholder="Job ended date" />
                    </div>
                  </div>
                );
              }
              return textfield;
            })()}
            <div className={`flex w-2/3 justify-end items-center relative`}>
              <span onClick={()=>setExperiencesFields(c=>c+1)}>Add more experiences</span>
            </div>
          </div>


          <div className=" mt-8 w-2/3 flex justify-end items-center relative">
            <button
              className="bg-purple-500 hover:bg-purple-300 hover:text-white py-3 px-4 border-2 border-purple-500 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default newcandidate;
