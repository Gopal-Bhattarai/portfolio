import RichText from "@/components/RichText";
import { Spinner } from "@/components/Spinner";
import { AlertContext } from "@/components/state/AlertContext";
import { useContext, useRef, useState } from "react";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [meta, setMeta] = useState("");
  const [file, setFile] = useState("/assets/img/addImage.png");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("Blog Post...");
  const fileRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const { setAlertValue } = useContext(AlertContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("meta", meta);
      formData.append("description", description);

      const response = await fetch("/api/addblog", {
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

  const handlePictureClick = (e) => {
    e.preventDefault();
    fileRef?.current.click();
  };

  const handleChange = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const files = document.getElementById("avatar");

    setImage(files.files[0]);

    setFile(URL.createObjectURL(files.files[0]));
    setIsSending(false);
  };

  if (isSending) {
    return <Spinner />;
  }

  return (
    <div className="container mt-2 border-2 border-purple-100 rounded-md">
      <p className="font-bold my-4">Add new Blog</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="lg:w-[500px] w-full my-1 px-5"
            type="text"
            name="title"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="w-full md:w-2/3 my-1 px-5"
            type="text"
            name="metadesc"
            placeholder="Meta Description"
            value={meta}
            onChange={(e) => setMeta(e.target.value)}
          />
        </div>

        <div className="flex lg:flex-row flex-col justify-between">
          <div className="w-full   ">
            <RichText
              value={description}
              onChange={setDescription}
              controls={[
                ['bold', 'italic', 'underline', 'link', 'image'],
                ['unorderedList', 'h1', 'h2', 'h3'],
                ['sup', 'sub'],
                ['alignLeft', 'alignCenter', 'alignRight'],
              ]}
              id="rte"
            />
          </div>

          <div className="w-500">
            <input
              className="mt-3"
              type="file"
              accept="image/*"
              name="avatar"
              id="avatar"
              ref={fileRef}
              hidden
              onChange={handleChange}
            />
            <img
              className="rounded-xl shadow-lg my-4 lg:w-[200px] w-[100px]"
              src={file}
              onClick={handlePictureClick}
            />
          </div>
        </div>

        <div className="my-3 mx-auto w-full md:w-1/5 border-purple-600 bg-purple-600 hover:bg-purple-400 text-white font-bold py-3 px-4 rounded-lg">
          <button className="w-full" type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBlog;
