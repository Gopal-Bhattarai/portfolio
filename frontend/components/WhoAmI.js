import SocialLinks from "./SocialLinks"

const WhoAmI = () => {
  return (
    <div className="bg-grey-50" id="about">
  <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
    <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
      <h2
        className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
      >
        Who am I?
      </h2>
      <h4
        className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
      >
        I'm Gopal Bhattarai, a Full Stack Web Developer 
      </h4>
      <p className="pt-6 font-body leading-relaxed text-grey-20">
      Highly motivated and experienced full stack web developer with proven experience in developing and deploying web applications.  Strong ability to work both independently and as part of a team to deliver high-quality, scalable, and reliable web applications. Capable of continuous learning new tools & technologies. Experience in driving projects forward as the development team leader, facilitating projects from concept to launch.  Eager to tackle more complex problems and continue to find ways to maximize user efficiency. 
      </p>
      <div
        className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start"
      >
        <div className="flex items-center justify-center sm:justify-start">
          <p className="font-body text-lg font-semibold uppercase text-grey-20">
            Connect with me
          </p>
          <div className="hidden sm:block">
            <i className="bx bx-chevron-right text-2xl text-primary"></i>
          </div>
        </div>
        <SocialLinks />
      </div>
    </div>
    <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
      <div>
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">
            HTML & CSS
          </h4>
          <h3 className="font-body text-3xl font-bold text-primary">75%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary" style={{width: "75%"}}></div>
        </div>
      </div>
      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">React.js</h4>
          <h3 className="font-body text-3xl font-bold text-primary">90%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary" style={{width: "90%"}}></div>
        </div>
      </div>
      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">
            Database
          </h4>
          <h3 className="font-body text-3xl font-bold text-primary">98%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary" style={{width: "98%"}}></div>
        </div>
      </div>
      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">Node.js</h4>
          <h3 className="font-body text-3xl font-bold text-primary">91%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary" style={{width: "91%"}}></div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default WhoAmI
