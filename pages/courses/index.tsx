import React from "react";
import Head from "next/head";
import PageLayout from "../../components/PageLayout";
import CourseCard from "../../components/CourseCard";
import QuarterDetails from "../../components/QuarterDetails";
import Footer from "../../components/Footer";
function Courses() {
  return (
    <>
      <Head>
        <title>Panaverse | Courses</title>
      </Head>
      <PageLayout>
        <section className="flex flex-col items-center mt-12">
          {/* <h1 className="text-5xl font-bold text-center">
            All
            <span className="text-red-700"> Courses</span>
          </h1> */}
          <p className="font-semibold text-lg">
            Each <span className="text-red-700">course</span> is divided into{" "}
            <span className="text-red-700">Five</span> quarters
          </p>
          <div className="lg:w-9/12 w-11/12 mt-6">
            <QuarterDetails
              title={"Quarter I"}
              core={true}
              details={["CS-101: Object-Oriented Programming using TypeScript"]}
            />
            <QuarterDetails
              title={"Quarter II"}
              core={true}
              details={[
                "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
              ]}
            />
            <QuarterDetails
              title={"Quarter III"}
              core={true}
              details={[
                "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
              ]}
            />
          </div>
          <p className="font-semibold mt-12 text-lg text-center">
            First <span className="text-red-700">three</span> quarters are same
            in each
            <span className="text-red-700"> specialization</span>.
            <br />
            After completing the{" "}
            <span className="text-red-700"> first three quarters</span> the
            participants will select
            <br /> one or more{" "}
            <span className="text-red-700"> specialization</span> consisting of
            two courses each:
          </p>
          <div className="flex flex-wrap justify-center mt-4">
            <CourseCard
              title="Web 3.0 (Blockchain) and Metaverse"
              description="This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and
              Metaverse experiences..."
              link="/web"
            />
            <CourseCard
              title="Artificial Intelligence (AI) and Deep Learning"
              description="The AI and Deep Learning specialization focuses on building and deploying intelligent APIs
              using OpenAI models..."
              link="/artificial-intelligence"
            />
            <CourseCard
              title="Cloud-Native Computing"
              description="The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK
for Kubernetes..."
              link="/cnc"
            />
            <CourseCard
              title="Ambient Computing and IoT"
              description="The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices,
Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices."
              link="/iot"
            />
            <CourseCard
              title="Genomics and Bioinformatics"
              description="Genomics is the study of the total genetic makeup of individual organisms, and how this
genetic information is structured, functions, and has evolved; bioinformatics"
              link="/bioinformatics"
            />
            <CourseCard
              title="Network Programmability and Automation"
              description="This course teaches network engineers how to automate systems with code using a variety of
technologies and tools, including Linux, Python, APIs, and Git"
              link="/networking"
            />
          </div>
        </section>
      </PageLayout>
      <Footer />
    </>
  );
}

export default Courses;
