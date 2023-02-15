import React from "react";
import Head from "next/head";
import PageLayout from "../../components/PageLayout";
import Footer from "../../components/Footer";
function About() {
  return (
    <>
      <Head>
        <title>Panaverse | About</title>
      </Head>
      <PageLayout>
        <div>About</div>
      </PageLayout>
      <Footer />
    </>
  );
}

export default About;
