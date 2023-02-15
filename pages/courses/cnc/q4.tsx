import CoursePageLayout from "../../../components/CourseLayout";
function QuarterFour() {
  return (
    <CoursePageLayout>
      <div className="mt-4 w-full flex flex-col items-center">
        <h1 className="my-4 font-semibold mb-8">Quarter IV</h1>
        <div className="lg:w-11/12 w-full flex lg:ml-0 ml-12 lg:flex-row flex-col-reverse justify-between">
          <h1 className="font-bold text-2xl lg:w-3/4">
            CN-351: Certified Kubernetes Application Developer (CKAD)
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
            Cloud-native architecture and technologies are an approach to
            designing, constructing, and operating workloads that are built in
            the cloud and take full advantage of the cloud computing model.
            Cloud-native technologies empower organizations to build and run
            scalable applications in modern, dynamic environments such as
            public, private, and hybrid clouds. Containers, service meshes,
            microservices, immutable infrastructure, and declarative APIs
            exemplify this approach.
          </p>
          <p>
            These techniques enable loosely coupled systems that are resilient,
            manageable, and observable. Combined with robust automation, they
            allow engineers to make high-impact changes frequently and
            predictably with minimal toil.
          </p>
          <p>
            Kubernetes is an open-source system for automating the deployment,
            scaling, and management of containerized applications. In this
            course, you will learn how to develop cloud applications using
            cloud-native technologies like Containers, Kubernetes, and CDK for
            Kubernetes.
          </p>
          <h2 className="underline mt-6 text-lg font-semibold">
            Course Outline:
          </h2>
        </div>
        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">
            1. Kubernetes: Up and Running:
          </h3>
          <div className="flex items-center">
            <p>Dive into the Future of Infrastructure 3rd Edition</p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3"
            >
              (Visit)
            </a>
          </div>
        </div>

        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">
            2. Cloud Development Kit for Kubernetes
          </h3>
          <div className="flex items-center">
            <a
              className="underline text-blue-900 ml-1"
              href="https://cdk8s.io/"
            >
              Visit CDK
            </a>
          </div>
        </div>
      </div>
    </CoursePageLayout>
  );
}

export default QuarterFour;
