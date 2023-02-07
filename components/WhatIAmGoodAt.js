
const WhatIAmGoodAt = ({candidate}) => {
  return (
    <div className="container py-16 md:py-20" id="services">
  <h2
    className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
  >
    Here's what I'm good at
  </h2>
  <h3
    className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
  >
    These are the services I offer
  </h3>

  <div
    className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
  >

    { Object.entries(candidate.skills).map(([key, record],index)=>(
  
    <div className="group rounded px-8 py-12 shadow hover:bg-primary" key={index}>
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
        <div className="hidden group-hover:block">
          <img
            src={`/candidate/skills/icon-${index}-white.svg`}
            alt="Graphic Design icon"
          />
        </div>
        <div className="block group-hover:hidden">
          <img
            src={`/candidate/skills/icon-${index}-black.svg`}
            alt="Graphic Design icon"
            />
        </div>
      </div>
      <div className="text-center">
        <h3
          className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
        >
          {record.key} 
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
          {record.value}
        </p>
      </div>
    </div>
    
  )) }


    {/* <div className="group rounded px-8 py-12 shadow hover:bg-primary">
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
        <div className="hidden group-hover:block">
          <img
            src="/assets/img/icon-development-white.svg"
            alt="development icon"
          />
        </div>
        <div className="block group-hover:hidden">
          <img
            src="/assets/img/icon-development-black.svg"
            alt="development icon"
          />
        </div>
      </div>
      <div className="text-center">
        <h3
          className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
        >
          Back-End
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
          Node.js, Next.js, Express, PHP, Python
        </p>
      </div>
    </div>
    <div className="group rounded px-8 py-12 shadow hover:bg-primary">
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
        <div className="hidden group-hover:block">
          <img
            src="/assets/img/icon-content-white.svg"
            alt="content marketing icon"
          />
        </div>
        <div className="block group-hover:hidden">
          <img
            src="/assets/img/icon-content-black.svg"
            alt="content marketing icon"
          />
        </div>
      </div>
      <div className="text-center">
        <h3
          className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
        >
          Databases
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
          MySQL, Microsoft SQL Server, Oracle, MongoDB, Firebase, Sanity.io...
        </p>
      </div>
    </div>
    <div className="group rounded px-8 py-12 shadow hover:bg-primary">
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
        <div className="hidden group-hover:block">
          <img
            src="/assets/img/icon-mobile-white.svg"
            alt="Mobile Application icon"
          />
        </div>
        <div className="block group-hover:hidden">
          <img
            src="/assets/img/icon-mobile-black.svg"
            alt="Mobile Application icon"
          />
        </div>
      </div>
      <div className="text-center">
        <h3
          className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
        >
          Mobile Development
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
          Responsive & PWA
        </p>
      </div>
    </div>
    <div className="group rounded px-8 py-12 shadow hover:bg-primary">
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
        <div className="hidden group-hover:block">
          <img
            src="/assets/img/web_server.png"
            alt="Email Marketing icon"
          />
        </div>
        <div className="block group-hover:hidden">
          <img
            src="/assets/img/web_server.png"
            alt="Email Marketing icon"
          />
        </div>
      </div>
      <div className="text-center">
        <h3
          className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
        >
          Web Servers
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
          Apache, IIS, Nginx
        </p>
      </div>
    </div>
    <div className="group rounded px-8 py-12 shadow hover:bg-primary">
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
        <div className="hidden group-hover:block">
          <img
            src="/assets/img/icon-design-white.svg"
            alt="Theme Design icon"
          />
        </div>
        <div className="block group-hover:hidden">
          <img
            src="/assets/img/icon-design-black.svg"
            alt="Theme Design icon"
          />
        </div>
      </div>
      <div className="text-center">
        <h3
          className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
        >
          Multimedia Design
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
          Photoshop, Illustrator, Audacity, Filmora, Premiere
        </p>
      </div>
    </div> */}

  </div>
</div>
  )
}

export default WhatIAmGoodAt
