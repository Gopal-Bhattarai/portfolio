import { useContext, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { AlertContext } from "@/components/state/AlertContext";

const initialValues = {
  name: "",
  profession: "",
  email: {
    primary: '',
    secondary: ''
  },
  phone1: "",
  phone2: "",
  address1: "",
  address2: "",
  description: "",
  sociallink: {
     facebook: "", instagram: "", linkedin: "", twitter: "", github: "",
  },
  //   proficiency: [{}],
  //   skills: [{}],
  //   portfolio: [{}],
  //   clients: [{}],
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
});

const labelcss = " w-48 ";
const controlcss = "w-full md:w-1/2 m-2 px-2";

const newcandidate = () => {
  const { setAlertValue } = useContext(AlertContext);

  const [showSecondEmail, setShowSecondEmail] = useState('hidden')
  const [file, setFile] = useState("/assets/img/addImage.png");
  const [image, setImage] = useState(null);
  const [isSending, setIsSending] = useState(false);


  const handleChange = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const files = document.getElementById("image");

    setImage(files.files[0]);

    setFile(URL.createObjectURL(files.files[0]));
    setIsSending(false);
    console.log(file)
  };

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("data", JSON.stringify(values))

    // for(let value in values) {
    //   formData.append(value, values[value])
    // }

    // const newObj = JSON.stringify(values)
    // console.log(newObj)

    
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
              onChange={(e)=>handleChange(e)}
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
              onClick={()=>setShowSecondEmail(v=>v==='flex' ? 'hidden' : 'flex')}
              src="/assets/img/AddAdditionalEmail.png"
              className="absolute mr-4 w-10 text-2xl font-extrabold cursor-pointer border-2 bg-purple-400 border-purple-500 text-white rounded-full flex justify-center "
              alt="Search Icon"
            >+</p>
          </div>
          <div className={`${showSecondEmail} w-2/3 justify-end items-center relative`}>
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


          <div className="mt-8 w-2/3 flex justify-end items-center relative">
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
