import { useContext, useState } from "react";
import { Spinner } from "../Spinner";
import { AlertContext } from "../state/AlertContext";

const PersonalInfo = ({ setPage, setUserId }) => {
  const { setAlertValue } = useContext(AlertContext);

  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");

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
  };

  const handleStartClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("data", JSON.stringify({ name, profession }));

    try {
      const response = await fetch("/api/addcandidate", {
        method: "POST",
        body: formData,
      });
      const json = await response.json();
      console.log("json", json);
      setUserId(json._id);
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

  if (isSending) {
    return (
      <div className="w-2/3 flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <div className="w-2/3 flex justify-end items-center relative">
        <div className="w-48">
          <label>Full Name</label>
        </div>
        <input
          className="w-full md:w-1/2 m-2 px-2"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
      </div>

      <div className="w-2/3 flex justify-end items-center relative">
        <div className="w-48">
          <label>Profession</label>
        </div>

        <input
          className="w-full md:w-1/2 m-2 px-2"
          type="text"
          name="profession"
          placeholder="Profession"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />
      </div>

      <div className="w-2/3 flex justify-end items-center relative">
        <div className="w-48">
          <label>Image</label>
        </div>

        <input
          className="w-full md:w-1/2 m-2 px-2"
          type="file"
          name="image"
          id="image"
          accept="image/*"
          placeholder="image"
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="w-2/3 flex justify-end items-center relative">
        <button
          onClick={handleStartClick}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 text-center inline-flex items-center hover:border-transparent rounded"
        >
          Start
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
  );
};

export default PersonalInfo;
