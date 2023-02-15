import CoursePageLayout from "../../../components/CourseLayout";
function QuarterFive() {
  return (
    <CoursePageLayout>
      <div className="mt-4 w-full flex flex-col items-center">
        <h1 className="my-4 font-semibold mb-8">Quarter V</h1>
        <div className="lg:w-11/12 w-full flex lg:ml-0 ml-12 lg:flex-row flex-col-reverse justify-between">
          <h1 className="font-bold text-2xl lg:w-3/4">
            Bio-361: Bioinformatics with Python
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
            In this course we will discover modern, next-generation sequencing
            libraries from the powerful Python ecosystem to perform cutting-edge
            research and analyze large amounts of biological data.
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
                href="
                https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/180323
                6426/ref=sr_1_1"
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
