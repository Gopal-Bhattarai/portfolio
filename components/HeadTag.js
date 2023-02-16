import Head from "next/head"


const HeadTag = () => {
  return (
    <Head>
      <meta charSet="utf-8" />

      <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        name="viewport"
      />

      <title>Homepage | Portfolio </title>

      <meta property="og:title" content="Homepage | Portfolio" />

      <meta property="og:locale" content="en_US" />

      <meta
        name="description"
        content="Gopal Bhattarai, Full Stack Web Developer,  IT Manager, Front End Developer"
      />

      <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

      <meta name="theme-color" content="#5540af" />

      <meta property="og:site_name" content="Atom Template" />

      <meta property="og:image" content="//assets/img/social.jpg" />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:site" content="@tailwindmade" />
    </Head>
  );
}

export default HeadTag
