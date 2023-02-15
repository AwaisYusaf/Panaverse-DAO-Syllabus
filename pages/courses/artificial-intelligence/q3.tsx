import CoursePageLayout from "../../../components/CourseLayout";
function QuarterThree() {
  return (
    <CoursePageLayout>
      <div className="mt-4 w-full flex flex-col items-center">
        <h1 className="my-4 font-semibold mb-8">Quarter III (Core)</h1>
        <div className="lg:w-11/12 w-full flex lg:ml-0 ml-12 lg:flex-row flex-col-reverse justify-between">
          <h1 className="font-bold text-2xl lg:w-3/4">
            $-101: Dollar Making Bootcamp - Full-Stack Template and API Product
            Development
          </h1>
          <p className="text-red-700">
            Duration: <span className="font-bold">13 weeks</span>
          </p>
        </div>
        <div className="w-11/12 flex flex-col lg:ml-0 ml-6">
          <h2 className="underline mt-6 text-lg font-semibold">
            Earn While You Learn Projects:
          </h2>
        </div>
        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">
            A. Build Full-Stack Next.js 13 Jamstack Templates
          </h3>
          <p>
            You will be assigned to build a template which we will sell on Theme
            Forest and Panaverse DAO marketplace. The Panaverse DAO will receive
            25% share on the sale of the template which will be used to manage
            the platform. An additional 15% will be spent on marketing the
            template. 60% of the revenues will be distributed to the developer
            through the Panaverse DAO in the form of Panaverse tokens.
          </p>
          <div className="flex items-center">
            <p>The Template Standard</p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://github.com/panaverse/panaverse-template-standard"
            >
              (Visit)
            </a>
          </div>
        </div>

        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">B. Build QraphQL APIs</h3>
          <p>
            You will be assigned to build APIs for which you will sell
            subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO
            will receive 25% share on the sale of the template which will be
            used to manage the platform. An additional 15% will be spent on
            marketing the template. 60% of the revenues will be distributed to
            the developer through the Panaverse DAO in the form of Panaverse
            tokens.
          </p>
        </div>
      </div>
    </CoursePageLayout>
  );
}

export default QuarterThree;
