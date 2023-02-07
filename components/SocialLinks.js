import Link from "next/link";

const SocialLinks = ({textColor='text-primary', candidate}) => {
  return (
    <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
      
      { Object.entries(candidate.sociallink).map((key, index)=>(

      <Link href={key[1]} key={index} className="pl-4">
        <i className={`bx bxl-${key[0]} text-2xl ${textColor} hover:text-yellow`}></i>
      </Link>

      )) }
      {/* <Link href="https://twitter.com/GopalBh10712643" className="pl-4">
        <i className={`bx bxl-twitter text-2xl ${textColor} hover:text-yellow`}></i>
      </Link>
      <Link
        href="https://www.linkedin.com/in/gopal-bhattarai-89001720/"
        className="pl-4"
      >
        <i className={`bx bxl-linkedin text-2xl ${textColor} hover:text-yellow`}></i>
      </Link>
      <Link href="https://www.instagram.com/bhattarai9851/" className="pl-4">
        <i className={`bx bxl-instagram text-2xl ${textColor} hover:text-yellow`}></i>
      </Link>
      <Link href="https://www.github.com/gopal-bhattarai/" className="pl-4">
        <i className={`bx bxl-github text-2xl ${textColor} hover:text-yellow`}></i>
      </Link> */}
    </div>
  );
};

export default SocialLinks;
