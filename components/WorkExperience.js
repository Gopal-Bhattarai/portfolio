
const WorkExperience = ({candidate}) => {
  return (
    <div className="container py-16 md:py-20" id="work">
  <h2
    className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
  >
    My work experience
  </h2>
  <h3
    className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
  >
    Here&apos;s what I did before web development
  </h3>

  <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
    <span
      className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"
    ></span>

    { candidate.experiences && Object.entries(candidate.experiences).map(([key, each])=>(

    <div key={key} className="mt-8 flex flex-col text-center md:flex-row md:text-left">
      <div className="md:w-2/5">
        <div className="flex justify-center md:justify-start">
          <span className="shrink-0">          
            <img
              src={`/candidate/experiences/${each.companyLogo}`}
              className="h-auto w-32"
              alt="company logo"
            />
          </span>
          <div className="relative ml-3 hidden w-full md:block">
            <span
              className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
            ></span>
          </div>
        </div>
      </div>
      <div className="md:w-3/5">
        <div className="relative flex md:pl-18">
          <span
            className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
          ></span>

          <div className="mt-1 flex">
            <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
            <div className="md:-mt-1 md:pl-8">
              <span className="block font-body font-bold text-grey-40"
                >{each.startDate} - {each.endDate}</span
              >
              <span
                className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                >{each.jobTitle}</span
              >
              <div className="pt-2">
                <span className="block font-body text-black"
                  >{each.jobDescription}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    ))}



    {/* <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
      <div className="md:w-2/5">
        <div className="flex justify-center md:justify-start">
          <span className="shrink-0">
            <img
              src="/assets/img/sodexologo.png"
              className="h-auto w-32"
              alt="company logo"
            />
          </span>
          <div className="relative ml-3 hidden w-full md:block">
            <span
              className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
            ></span>
          </div>
        </div>
      </div>
      <div className="md:w-3/5">
        <div className="relative flex md:pl-18">
          <span
            className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
          ></span>

          <div className="mt-1 flex">
            <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
            <div className="md:-mt-1 md:pl-8">
              <span className="block font-body font-bold text-grey-40"
                >Feb 2011 - Jan 2013</span
              >
              <span
                className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                >Country IT Manager</span
              >
              <div className="pt-2">
                <span className="block font-body text-black"
                  >Leading IT departments across the country - Afghanistan</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
      <div className="md:w-2/5">
        <div className="flex justify-center md:justify-start">
          <span className="shrink-0">
            <img
              src="/assets/img/avilogo.png"
              className="h-auto w-32"
              alt="company logo"
            />
          </span>
          <div className="relative ml-3 hidden w-full md:block">
            <span
              className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
            ></span>
          </div>
        </div>
      </div>
      <div className="md:w-3/5">
        <div className="relative flex md:pl-18">
          <span
            className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
          ></span>

          <div className="mt-1 flex">
            <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
            <div className="md:-mt-1 md:pl-8">
              <span className="block font-body font-bold text-grey-40"
                >Jan 2009 - Jan 2011</span
              >
              <span
                className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                >IT Manager</span
              >
              <div className="pt-2">
                <span className="block font-body text-black"
                  >Responsible for managing web applications, team & resources.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
      <div className="md:w-2/5">
        <div className="flex justify-center md:justify-start">
          <span className="shrink-0">
            <img
              src="/assets/img/supremelogo.png"
              className="h-auto w-32"
              alt="company logo"
            />
          </span>
          <div className="relative ml-3 hidden w-full md:block">
            <span
              className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
            ></span>
          </div>
        </div>
      </div>
      <div className="md:w-3/5">
        <div className="relative flex md:pl-18">
          <span
            className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
          ></span>

          <div className="mt-1 flex">
            <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
            <div className="md:-mt-1 md:pl-8">
              <span className="block font-body font-bold text-grey-40"
                >May 2007 - Jan 2009</span
              >
              <span
                className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                >IT Administrator</span
              >
              <div className="pt-2">
                <span className="block font-body text-black"
                  >Responsible for managing & administering Networks, Servers, Web Sites & Users.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </div>
</div>
  )
}

export default WorkExperience
