import SocialLinks from "./SocialLinks"


const FooterSection = () => {
  return (
    <div className="bg-primary">
  <div className="container flex flex-col justify-between py-6 sm:flex-row">
    <p className="text-center font-body text-white md:text-left">
      © Copyright 2023. All right reserved, GB.
    </p>

    <SocialLinks textColor='text-white' />

  </div>
</div>
  )
}

export default FooterSection
