import CoursePageLayout from "../../../components/CourseLayout";
function QuarterFive() {
  return (
    <CoursePageLayout>
      <div className="mt-4 w-full flex flex-col items-center">
        <h1 className="my-4 font-semibold mb-8">Quarter V</h1>
        <div className="lg:w-11/12 w-full flex lg:ml-0 ml-12 lg:flex-row flex-col-reverse justify-between">
          <h1 className="font-bold text-2xl lg:w-3/4">
            NPA-361: Network Programmability and Automation
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
            Traditional network management techniques can not be effectively
            automated and do not scale well. By implementing network
            programmability based on Application Programming Interfaces, this
            course will assist in overcoming issues of the future and help you
            develop the skills required for the Next-Generation Network
            Engineer.
          </p>

          <h2 className="underline mt-6 text-lg font-semibold">
            Course Outline:
          </h2>
        </div>
        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">Textbook:</h3>
          <div className="flex items-center">
            <p>
              Download from{" "}
              <a
                className="underline text-blue-900 ml-1"
                href="https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3"
              >
                this
              </a>{" "}
              link
            </p>
          </div>
        </div>
      </div>
    </CoursePageLayout>
  );
}

export default QuarterFive;
