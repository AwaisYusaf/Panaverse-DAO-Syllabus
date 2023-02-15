import CoursePageLayout from "../../../components/CourseLayout";
function QuarterFour() {
  return (
    <CoursePageLayout>
      <div className="mt-4 w-full flex flex-col items-center">
        <h1 className="my-4 font-semibold mb-8">Quarter IV</h1>
        <div className="lg:w-11/12 w-full flex lg:ml-0 ml-12 lg:flex-row flex-col-reverse justify-between">
          <h1 className="font-bold text-2xl lg:w-3/4">
            AI-351: Developing Planet-Scale Intelligent APIs and Python
            Programming
          </h1>
          <p className="text-red-700">
            Duration: <span className="font-bold">13 weeks</span>
          </p>
        </div>
        <div className="w-11/12 flex flex-col lg:ml-0 ml-6">
          <h2 className="underline mt-6 text-lg font-semibold">
            Course description:
          </h2>
          <p>
            Artificial intelligence is the simulation of human intelligence
            processes by machines, especially computer systems. The AI and Deep
            Learning Specialization is a foundational program that will aid in
            your comprehension of deep learning potential, difficulties, and
            effects as well as equip you to take part in the creation of
            cutting-edge AI technology.
          </p>

          <p>
            We will start this course by understanding the fundamentals and use
            cases for AI and move on to building next-gen intelligent apps using
            OpenAI’s powerful models and Next.js 13.
          </p>
          <p>
            We will conclude the course by learning about basic programming
            concepts using Python, such as lists, dictionaries, classes,
            functions, and loops, and practice writing clean and readable code
            with exercises for each topic. We will also learn how to make your
            programs interactive and how to test your code safely before adding
            it to a project. It is a fast-paced, thorough introduction to
            programming with Python 3.10+ that will have you writing programs,
            solving problems, and making things that work in no time. In this
            quarter we will also learn Git, the distributed version control
            system. We will also review Git-based GitHub services.
          </p>
          <h2 className="underline mt-6 text-lg font-semibold">
            Course Outline:
          </h2>
        </div>
        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">
            1. Introduction to Machine Learning, Data Science, and AI
          </h3>
          <div className="flex items-center">
            <p>AI for Everyone</p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://www.coursera.org/learn/ai-for-everyone"
            >
              (Course)
            </a>
          </div>

          <div className="w-10/12 flex flex-col">
            <h3 className="mt-6 text-lg font-semibold">
              2. Building Next-Gen Intelligent Apps with OpenAI’s Powerful
              Models We will cover GPT-4, ChatGPT, etc. and Next.js 13
            </h3>
            <div className="items-center">
              <a
                className="underline text-blue-900 ml-1"
                href="https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45"
              >
                Resources (Link 1)
              </a>
              <br />
              <a
                className="underline text-blue-900 ml-1"
                href="https://openai.com/api/"
              >
                Resources (Link 2)
              </a>
            </div>
          </div>
          <div className="w-10/12 flex flex-col">
            <h3 className="mt-6 text-lg font-semibold">
              3. Python Crash Course for TypeScript Developers
            </h3>
            <div className="flex items-center">
              <p className="lg:w-3/4">
                Python Crash Course, 2nd Edition: A Hands-On, Project-Based
                Introduction to Programming 2nd Edition
                <a
                  className="underline text-blue-900 ml-1"
                  href="https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5"
                >
                  (Visit)
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </CoursePageLayout>
  );
}

export default QuarterFour;
