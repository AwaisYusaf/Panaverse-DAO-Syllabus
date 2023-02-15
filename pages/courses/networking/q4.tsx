import CoursePageLayout from "../../../components/CourseLayout";
function QuarterFour() {
  return (
    <CoursePageLayout>
      <div className="mt-4 w-full flex flex-col items-center">
        <h1 className="my-4 font-semibold mb-8">Quarter IV</h1>
        <div className="lg:w-11/12 w-full flex lg:ml-0 ml-12 lg:flex-row flex-col-reverse justify-between">
          <h1 className="font-bold text-2xl lg:w-3/4">
            NPA-351: CCNA 200-301 Certification
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
            This course will focus on learning the basics of the networking and
            preparing for the new Cisco Certified Network Associate (CCNA) exam.
            This comprehensive course focuses on the solutions and technologies
            needed to implement and administer a broad range of modern
            networking and IT infrastructure.
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
                href="https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1"
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

export default QuarterFour;
