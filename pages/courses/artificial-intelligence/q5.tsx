import CoursePageLayout from "../../../components/CourseLayout";
function QuarterFive() {
  return (
    <CoursePageLayout>
      <div className="mt-4 w-full flex flex-col items-center">
        <h1 className="my-4 font-semibold mb-8">Quarter V</h1>
        <div className="lg:w-11/12 w-full flex lg:ml-0 ml-12 lg:flex-row flex-col-reverse justify-between">
          <h1 className="font-bold text-2xl lg:w-3/4">
            AI-361: Deep Learning and MLOps
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
            This course will help you understand the capabilities, challenges,
            and consequences of deep learning and prepare you to participate in
            the development of leading-edge AI technology. We will finish the
            program by learning how to envision, create, and maintain integrated
            systems that run constantly in production. Production systems must
            manage constantly changing data, in stark contrast to typical
            machine learning modeling. The production system must also operate
            continuously at the lowest possible cost while delivering the
            highest possible performance.
          </p>

          <h2 className="underline mt-6 text-lg font-semibold">
            Course Outline:
          </h2>
        </div>
        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">
            1. Deep Learning with Tensorflow
          </h3>
          <div className="flex items-center">
            <p>Deep Learning with Python, Second Edition 2nd Edition</p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2"
            >
              (Book)
            </a>
          </div>

          <div className="w-10/12 flex flex-col">
            <h3 className="mt-6 text-lg font-semibold">
              2. Machine Learning Engineering for Production (MLOps) using
              Terraform for CDK
            </h3>
            <div className="flex items-center">
              <p>
                A Comprehensive Guide to MLOps Terraform: Infrastructure As
                Code(IaC)
              </p>
              <a
                className="underline text-blue-900 ml-1"
                href="https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351"
              >
                (Visit)
              </a>
            </div>

            <div className="flex items-center">
              <p>MLOps leveraging AWS SageMaker and Terraform</p>
              <a
                className="underline text-blue-900 ml-1"
                href="https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce"
              >
                (Visit)
              </a>
            </div>
          </div>
        </div>
      </div>
    </CoursePageLayout>
  );
}

export default QuarterFive;
