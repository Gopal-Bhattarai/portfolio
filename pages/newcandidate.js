import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  profession: "",
  email1: "",
  email2: "",
  phone1: "",
  phone2: "",
  address1: "",
  address2: "",
  image: "",
  description: "",
  sociallink: [{}],
  proficiency: [{}],
  skills: [{}],
  portfolio: [{}],
  clients: [{}],
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
});

const onSubmit = (values) => {
  console.log(values);
};

const controlcss = "w-full md:w-1/2 my-1 px-5";

const newcandidate = () => {
  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form autoComplete="off">
          <h2>Input your details to create a portfolio</h2>
          <div>
            <Field
              className={controlcss}
              type="text"
              name="name"
              placeholder="name"
            />
          </div>

          <div>
            <Field
              className={controlcss}
              type="text"
              name="profession"
              placeholder="Profession"
            />
          </div>

          <div>
            <button type='submit'>Submit</button>
          </div>

        </Form>
      </Formik>
    </div>
  );
};

export default newcandidate;
