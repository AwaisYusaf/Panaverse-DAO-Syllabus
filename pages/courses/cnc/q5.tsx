import CoursePageLayout from "../../../components/CourseLayout";
function QuarterFive() {
  return (
    <CoursePageLayout>
      <div className="mt-4 w-full flex flex-col items-center">
        <h1 className="my-4 font-semibold mb-8">Quarter V</h1>
        <div className="lg:w-11/12 w-full flex lg:ml-0 ml-12 lg:flex-row flex-col-reverse justify-between">
          <h1 className="font-bold text-2xl lg:w-3/4">
            CN-361: Developing Multi-Cloud Apps using CDK for Terraform
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
            Terraform lets you use the same workflow to manage multiple
            providers and handle cross-cloud dependencies. This simplifies
            management and orchestration for large-scale, multi-cloud
            infrastructures.
          </p>

          <p>
            Cloud Development Kit for Terraform (CDKTF) allows you to use
            familiar programming languages to define and provision
            infrastructure. This gives you access to the entire Terraform
            ecosystem without learning HashiCorp Configuration Language (HCL)
            and lets you leverage the power of your existing toolchain for
            testing, dependency management, etc.
          </p>
          <h2 className="underline mt-6 text-lg font-semibold">
            Course Outline:
          </h2>
        </div>

        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">1. CDK for Terraform</h3>
          <div className="flex items-center">
            <a
              className="underline text-blue-900 ml-1"
              href="https://developer.hashicorp.com/terraform/cdktf"
            >
              Visit CDK
            </a>
          </div>
        </div>
      </div>
    </CoursePageLayout>
  );
}

export default QuarterFive;
