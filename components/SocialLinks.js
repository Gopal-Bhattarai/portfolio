import Link from "next/link";

const SocialLinks = ({textColor='text-primary'}) => {
  return (
    <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
      <Link href="https://www.facebook.com/gopal.bhattarai">
        <i className={`bx bxl-facebook-square text-2xl ${textColor} hover:text-yellow`}></i>
      </Link>
      <Link href="https://twitter.com/GopalBh10712643" className="pl-4">
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
    </div>
  );
};

export default SocialLinks;
