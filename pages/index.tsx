import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import PageLayout from "../components/PageLayout";
import Lottie from "react-lottie-player";
import lottieJson from "../animations/homepage-lottie.json";
import NewsCard from "../components/NewsCard";
import { blogs } from "../static/data";
import Image from "next/image";
import InstructorCard from "../components/InstructorCard";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Panaverse | Home</title>
      </Head>
      <PageLayout>
        {/* Section 1 */}
        <section>
          <div className="flex justify-around flex-wrap md:flex-nowrap min-h-screen">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-5xl font-bold mt-5 w-9/12">
                Get Ready for{" "}
                <span className="text-red-700">Next Generation</span> of the
                Internet
              </h1>
              <h1 className="text-lg font-medium mt-6 text-gray-500 w-9/12">
                Join a 13 Trillion Dollar Industry with 5 Billion Users
              </h1>
              <div className="w-9/12">
                <Link href="/courses">
                  <button className="text-white bg-red-700 px-8 py-3 hover:underline rounded-md mt-6">
                    Enroll now
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex items-center w-80 lg:w-fit">
              <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 550, height: 330 }}
              />
            </div>
          </div>
        </section>
        {/* Section 2 */}
        <section className="flex flex-col mt-52 w-full items-center">
          <h1 className="text-5xl font-bold text-center">
            <span className="text-red-700">Earn</span> While
            <span className="text-red-700"> You</span> Learn
          </h1>
          <p className="text-center lg:w-8/12 w-full text-xl mt-4">
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within <span className="text-red-700">six months</span> of the
            program’s beginning. It resembles a cross between a corporate
            venture and an educational project.
          </p>
          <h1 className="text-5xl font-bold text-center mt-20">
            <span className="text-red-700">Courses</span> We Offer
          </h1>
          {/* Section for displaying Courses */}
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
          <h1 className="text-5xl font-bold text-center mt-20">
            <span className="text-red-700">Scheme</span> of Study
          </h1>
          <p className="text-center lg:w-8/12 w-full text-xl mt-4">
            This curriculum is intended for beginners who want to learn software
            development from the ground up. The first three quarters are shared
            by all specialties and are dedicated to studying Object-Oriented
            Programming and cutting-edge{" "}
            <span className="text-black">Full-Stack Web 2.0 development</span>
            .<br /> It is going to be a
            <span className="text-red-700"> fifteen-month-long</span> hybrid
            program that includes both onsite and online classes and is divided
            into five quarters of 13 weeks each. The emphasis will be on
            hands-on learning by educating students to produce projects. To
            accommodate everyone, courses will be held primarily on weekends or
            after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid
            teaching format, with core onsite classes complemented by online
            Zoom laboratories and recorded videos.
          </p>

          <h1 className="text-5xl font-bold text-center mt-20">
            <span className="text-red-700">Program</span> Potential
          </h1>
          {/* Blog Cards Container */}
          <div className="flex mt-8 flex-wrap justify-center w-full">
            {blogs.map((blog, index) => {
              return (
                <NewsCard
                  key={index}
                  title={blog.title}
                  imgUrl={`/assets/blog${index + 1}.jpg`}
                  blogLink={blog.blogLink}
                />
              );
            })}
          </div>
          <h1 className="text-5xl font-bold text-center mt-20">
            <span className="text-red-700">Our </span>Top Instructors
          </h1>
          {/* Section for Instructors Information Cards */}
          <div className="flex items-center mt-8 flex-wrap justify-center">
            <InstructorCard
              imgUrl="/assets/instructors/sir-zia.jpg"
              name="Zia Khan"
              details="COO PIAIC, CEO Panacloud"
            />
            <InstructorCard
              imgUrl="/assets/instructors/sir-daniyal.jpg"
              name="Daniyal Nagori"
              details="CEO PIAIC, Full Stack Developer."
            />
            <InstructorCard
              imgUrl="/assets/instructors/sir-zeeshan.jpg"
              name="Zeeshan Hanif"
              details="Full Stack Angular & Blockchain Developer"
            />
            <InstructorCard
              imgUrl="/assets/instructors/miss-hira.jpg"
              name="Hira Khan"
              details="Full Stack Serverless Developer"
            />
            <InstructorCard
              imgUrl="/assets/instructors/sir-adil.jpg"
              name="Adil Altaf"
              details="Full Stack Engineer"
            />
          </div>

          <h1 className="text-5xl font-bold text-center mt-20">
            <span className="text-red-700">Strategic</span> Partners
          </h1>
          <div className="flex mt-20 flex-wrap justify-center items-center">
            <Image
              alt="partner"
              width="220"
              height="200"
              src="/assets/panacloud.svg"
              className="mx-20 opacity-50 hover:opacity-100 transition-all my-5 grayscale hover:grayscale-0"
            />
            <Image
              className="mx-20 opacity-50 hover:opacity-100 transition-all w-56 md:w-fit grayscale hover:grayscale-0"
              alt="partner"
              width="250"
              height="200"
              src="/assets/saylani.png"
            />
          </div>
        </section>
      </PageLayout>
      <Footer />
    </>
  );
};

export default Home;
