import React from "react";
import Head from "next/head";
import PageLayout from "../../components/PageLayout";
import Footer from "../../components/Footer";
import Image from "next/image";
function About() {
  return (
    <>
      <Head>
        <title>Panaverse | About</title>
      </Head>
      <PageLayout>
        <section className="min-h-screen w-full">
          <div className="flex flex-col lg:flex-row min-h-[60vh]">
            <div className="w-full lg:w-2/4 flex flex-col justify-center items-center">
              <h1 className="font-bold text-3xl mb-4">Our Mission</h1>
              <p className="w-full lg:w-2/4">
                The
                mission of Panaverse is to reshape Pakistan by revolutionizing
                education, research, and business by adopting latest,
                cutting-edge technologies. Experts are calling this the 4th
                industrial revolution. We want Pakistan to become a global hub
                for AI, data science, cloud native computing, edge computing,
                blockchain, augmented reality, and internet of things.
              </p>
            </div>
            <div className="w-full lg:w-2/4 flex justify-center items-center">
              <Image
                src="/assets/our-mission.png"
                alt="img"
                width="600"
                height="500"
                className="rounded-3xl"
              />
            </div>
          </div>
          <div className="flex  flex-col-reverse lg:flex-row min-h-[60vh]">
            <div className="w-full lg:w-2/4 flex justify-center items-center">
              <iframe
                className="rounded-2xl"
                width="760"
                height="415"
                src="https://www.youtube.com/embed/zmv0A90UKi0"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-full lg:w-2/4 flex flex-col justify-center items-center">
              <h1 className="font-bold text-3xl mb-4">Our Story</h1>
              <p className="w-full lg:w-2/4 mb-8">
                The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
                Panaverse DAO is a movement to spread these technolgies
                globally. It is community of Web 3 and Metaverse developers,
                designers, trainers, startup founders and service providers.
              </p>
            </div>
          </div>
        </section>
      </PageLayout>
      <Footer />
    </>
  );
}

export default About;
