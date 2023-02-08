import Image from "next/image";
import Link from "next/link";
import PortableText from "react-portable-text";



const Post = ({ blog }) => {


  return (
    <>
      <div>
        <div className="container py-6 md:py-10">
          <div className="mx-auto max-w-4xl">
            <div className="">
              <h1 className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                {blog.title}
              </h1>
              <div className="flex items-center pt-5 md:pt-10">
                <div>
                  <Image priority
                    width="20" height="20"
                    src="/assets/img/blog-author.jpg"
                    className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                    alt="author image"
                  />
                </div>
                <div className="pl-5">
                  <span className="block font-body text-xl font-bold text-grey-10">
                    {blog.meta}
                  </span>
                  <span className="block pt-1 font-body text-xl font-bold text-grey-30">
                    {blog.createdAt}
                  </span>
                </div>
              </div>
            </div>
            <div className="prose max-w-none pt-8">
              <h2 id="lorem-ipsum-dolor-sit-amet">
                {blog.meta}
              </h2>
              <div
                className="bg-white py-6 px-5 xl:py-8 w-[250px]"
                style={{
                  backgroundImage: `url('/image/${blog.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                }}
              ></div>
                    <div className='maincontent'>
                     
                    <div dangerouslySetInnerHTML={{ __html: blog.description }} />

                    </div>
            </div>
            <div className="flex pt-10">
              <span className="rounded-xl bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20">
                Frontend
              </span>
              <span className="rounded-xl mx-2 bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20">
                Design
              </span>
            </div>
            <div className="mt-10 flex justify-between border-t border-lilLink py-12">
              <Link href="/" className="flex items-center">
                <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
                <span className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">
                  Previous Post
                </span>
              </Link>
              <Link href="/" className="flex items-center">
                <span className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">
                  Next Post
                </span>
                <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
              </Link>
            </div>
            <div className="flex flex-col items-center border-t border-lilLink py-12 pt-12 md:flex-row md:items-start xl:pb-20">
              <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                <img
                  src="/assets/img/blog-author.jpg"
                  className="rounded-full shadow"
                  alt="author image"
                />
              </div>
              <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                  Auther Name
                </h3>
                <p className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magnLink aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex eLink commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit.
                </p>
                <div className="flex items-center justify-center pt-5 md:justify-start">
                  <Link href="/">
                    <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                  </Link>
                  <Link href="/" className="pl-4">
                    <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                  </Link>
                  <Link href="/" className="pl-4">
                    <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
                  </Link>
                  <Link href="/" className="pl-4">
                    <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                  </Link>
                  <Link href="/" className="pl-4">
                    <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {

    const { id } = context.query

   const response = await fetch(`${process.env.HOST}/api/blog/${id}`);
   const blog = await response.json()


    return {
      props: {
        blog,
      },
    };
  }
  