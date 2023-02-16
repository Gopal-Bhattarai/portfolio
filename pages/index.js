import HeadTag from "@/components/HeadTag";
import PortFolioSection from "@/components/PortFolioSection";
import HeroSection from "@/components/HeroSection";
import WhoAmI from "@/components/WhoAmI";
import WhatIAmGoodAt from "@/components/WhatIAmGoodAt";
import MyClients from "@/components/MyClients";
import WorkExperience from "@/components/WorkExperience";
import Statistics from "@/components/Statistics";
import BlogSection from "@/components/BlogSection";
import ContactFormSection from "@/components/ContactFormSection";
import JoinTheClubSection from "@/components/JoinTheClubSection";
import FooterSection from "@/components/FooterSection";
import NavMenuLargeScreen from "@/components/NavMenuLargeScreen";
import NavMenuSmallScreen from "@/components/NavMenuSmallScreen";
import MyExClients from "@/components/MyExClients";
import Alert from "@/components/Alert";

export default function Home({ blogs, candidate  }) {
  return (
    <>
      <HeadTag />
      <Alert />

      <div id="main" className="relative">
        <NavMenuLargeScreen />

        <div>
          <HeroSection candidate={candidate} />

          <WhoAmI candidate={candidate} />

          <WhatIAmGoodAt candidate={candidate} />

          <PortFolioSection candidate={candidate} />

          <MyClients candidate={candidate} />
          <MyExClients candidate={candidate} />

          <WorkExperience candidate={candidate} />

          <Statistics />

          {/* <BlogSection blogs={blogs} candidate={candidate} /> */}

          <ContactFormSection candidate={candidate} />

          <div
            className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96"
            style={{ backgroundImage: "url(/assets/img/map.png)" }}
          ></div>

          <JoinTheClubSection candidate={candidate} />
        </div>

        <FooterSection candidate={candidate} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const defaultID = '63e1b4544efb35048d08d31e';

  const candidate = await fetch(
    `${process.env.HOST}/api/candidate/${defaultID}`
  );
  const result = await candidate.json();


  const response = await fetch(`${process.env.HOST}/api/blog?limit=3`);
  const blogs = await response.json();

  return {
    props: {
      candidate: result,
      blogs: blogs.blogs,
    },
  };
}


  
