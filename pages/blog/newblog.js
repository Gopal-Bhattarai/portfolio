import { Spinner } from "@/components/Spinner";
import { useRef, useState, useMemo } from "react";
import JoditEditor from 'jodit-react';

const NewBlog = () => {
  const editor = useRef(null);

	// const config = useMemo(
	// 	{
	// 		readonly: false, // all options from https://xdsoft.net/jodit/doc/,
	// 		placeholder: placeholder || 'Start typings...'
	// 	},
	// 	[placeholder]
	// );


    const [title, setTitle]= useState('')
    const [meta, setMeta] = useState('')
    const [file, setFile] = useState('/assets/img/noImage.png')
    const [image, setImage] = useState(null)
    const [description, setDescription] = useState('')
    const fileRef = useRef(null)
	  const [isSending, setIsSending] = useState(false)
    
    
    const handleSubmit = async (e) => {
    e.preventDefault();
    const body ={ title, meta, description, image}
        
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title)
    formData.append("meta", meta)
    formData.append("description", description)

    const response = await fetch('/api/addblog',{
        method:'POST',
        body: formData,

    })
    const json = await response.json();
    console.log(json)
  };

  const handlePictureClick = (e) => {
    e.preventDefault();
    fileRef?.current.click()
}

  const handleChange = async (e) => {
    e.preventDefault();
    setIsSending(true)
    const files = document.getElementById("avatar");

    setImage(files.files[0])

    setFile(URL.createObjectURL(files.files[0]))
    setIsSending(false)
  };

  if(isSending) {
    return <Spinner />
  }

  return (
    <div className="container mt-2 border-2 border-purple-100 rounded-md">
      <p className="font-bold my-4">Add new Blog</p>
      <form onSubmit={handleSubmit}>
        <input
          className="lg:w-[500px] w-full my-1 px-5"
          type="text"
          name="title"
          placeholder="Blog Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <input
          className="w-full md:w-2/3 my-1 px-5"
          type="text"
          name="metadesc"
          placeholder="Meta Description"
          value={meta}
          onChange={(e)=>setMeta(e.target.value)}
        />

        <div className="flex lg:flex-row flex-col-reverse ">

        <JoditEditor
			ref={editor}
			value={description}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setDescription(newContent)} // preferred to use only this option to update the content for performance reasons

		/>
        {/* <textarea
            className="w-full flex-grow lg:mr-5 mr-0"
            id="message"
            rows="4"
            placeholder="Blog Post..."
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            ></textarea> */}

            <input className="mt-3" type="file" accept="image/*" name="avatar" id="avatar" ref={fileRef} hidden onChange={handleChange}  />
            <img className="rounded-xl shadow-lg my-4  lg:h-[300px] h-[200px] lg:w-[300px] w-auto" src={file} onClick={handlePictureClick} />
            
        </div>
        <div className="my-3 mx-auto w-full md:w-1/5 border-purple-600 bg-purple-600 hover:bg-purple-400 text-white font-bold py-3 px-4 rounded-lg">
          <button className="w-full" type="submit">Post</button>
        </div>
      </form>
    </div>
  );
};

export default NewBlog;
