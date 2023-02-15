import CoursePageLayout from "../../../components/CourseLayout";
function QuarterFour() {
  return (
    <CoursePageLayout>
      <div className="mt-4 w-full flex flex-col items-center">
        <h1 className="my-4 font-semibold mb-8">Quarter IV</h1>
        <div className="lg:w-11/12 w-full flex lg:ml-0 ml-12 lg:flex-row flex-col-reverse justify-between">
          <h1 className="font-bold text-2xl lg:w-3/4">
            AC-351: Ambient Computing with Voice Assistants and Matter Devices
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
            Ambient computing, also commonly referred to as ubiquitous
            computing, is the concept of blending computing power into our
            everyday lives in a way that is embedded into our surroundings -
            invisible but useful. In a multi-device world, people do not want to
            spend their life fussing with technology. An ambient approach gets
            the tech out of your way so you can live your life while getting the
            help you need. It does not matter what device you are using, what
            context you are in, whether you are talking, typing, or tapping. The
            technology in your life works together seamlessly. Ambient computing
            uses all aspects of modern-day technology, including voice
            assistants, artificial intelligence, sensors, connectivity, cloud
            computing and more.
          </p>
          <p>
            If you were thinking that the IoT and ambient computing sound a lot
            alike, you are not wrong; the two concepts are intertwined. IoT
            refers to the vast array of devices that connect to the internet to
            optimize their functionality, like smart sensors and smart speakers:
            ambient computing builds on that. Ambient computing focuses on the
            interaction between these devices once they are connected.
          </p>
          <p>
            Matter, the next-generation smart home standard, solves many smart
            home pain points while bringing all our IoT devices together. Some
            of the biggest tech companies are working together to make Matter a
            unified protocol for future smart homes. These companies include
            Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa,
            Samsung SmartThings, Google Nest, and Samsung SmartThings will
            support the Matter standard by default for all new devices.
          </p>
          <p>
            In this course we will learn to build smart homes with Amazon Alexa
            and Matter protocol.
          </p>
          <h2 className="underline mt-6 text-lg font-semibold">
            Course Outline:
          </h2>
        </div>
        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">
            1. Alexa Skill Developement
          </h3>
          <div className="flex items-center">
            <p>Dive into the Alexa Development</p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://developer.amazon.com/en-US/alexa"
            >
              (Visit)
            </a>
          </div>
        </div>

        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">
            2. Alexa with Matter Protocol
          </h3>
          <div className="">
            <a
              className="underline text-blue-900 ml-1"
              href="https://developer.amazon.com/en-US/alexa/matter"
            >
              Link 1
            </a>
            <br />
            <a
              className="underline text-blue-900 ml-1"
              href="https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html"
            >
              Link 2
            </a>
          </div>
        </div>
      </div>
    </CoursePageLayout>
  );
}

export default QuarterFour;
