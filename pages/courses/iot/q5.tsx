import CoursePageLayout from "../../../components/CourseLayout";
function QuarterFive() {
  return (
    <CoursePageLayout>
      <div className="mt-4 w-full flex flex-col items-center">
        <h1 className="my-4 font-semibold mb-8">Quarter V</h1>
        <div className="lg:w-11/12 w-full flex lg:ml-0 ml-12 lg:flex-row flex-col-reverse justify-between">
          <h1 className="font-bold text-2xl lg:w-3/4">
            AC-361: Embedded Programming using C and Rust
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
            This is an introductory course about using the C and Rust
            Programming Languages on Bare Metal embedded systems, such as
            Microcontrollers. We will start by introducing embedded systems and
            move on to learn the C++ and Rust programming languages. We will
            learn about basic programming concepts using C and Rust, then we
            will explore key concepts in electronics, microcontrollers, and
            embedded programming. It is a fast-paced, thorough introduction to
            programming with C and Rust that will have you writing programs,
            solving problems, burning your code on microcontrollers, playing
            with GPIOs, and making things that work in no time.
          </p>

          <h2 className="underline mt-6 text-lg font-semibold">
            Course Outline:
          </h2>
        </div>
        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">
            1. Introduction to the Internet of Things and Embedded Systems
          </h3>
          <div className="flex items-center">
            <p>Slides </p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar_ing"
            >
              (Link)
            </a>
          </div>

          <p>
            What is the Fourth Industrial Revolution?
            <br />
            What is IoT?
            <br />
            Embedded Systems
            <br />
            Hardware and Software for IoT
            <br />
            Edge and Cloud Computing
            <br />
            The future of IoT is AI
            <br />
            Blockchain in the Internet of Things?
            <br />
            IoT + AI + Blockchain: The Fourth Industrial Revolution has begun
            <br />
            How will Matter change the IoT Infrastructure and address issues
            <br />
            Metaverse and IoT
          </p>
          <p className="w-full">
            <i>
              Mid-Term I: Introduction to the Internet of Things (IoT) Quiz in
              Week 3
            </i>
          </p>
        </div>

        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 w-3/4 text-lg font-semibold">
            2. The C Reference Book: The C programming language Embedded
            Programming book: Internet of things with ESP8266
          </h3>
          <div className="">
            <a
              className="underline text-blue-900 ml-1"
              href="https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing"
            >
              (Download Book)
            </a>
          </div>
        </div>

        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 w-3/4 text-lg font-semibold">
            3. Introduction to C (Part 1)
          </h3>
          <div className="">
            <p>C environment Setup for (Windows, Linux, and Mac OS systems)</p>
            <p>Chapters 1-2 of “The C programming language”</p>
            <p>
              ● Variable names types
              <br />● Data types and sizes
              <br />● Constants
              <br />● Arithmetic operations
              <br />● Logical and relational operators
              <br />● Type conversions.
              <br />● Bitwise operators
              <br />● Conditional expressions.
              <br />
              <br />
              Programming Assignments will also be given.
            </p>
          </div>
        </div>

        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 w-3/4 text-lg font-semibold">
            4. C Programming (Part 2){" "}
          </h3>
          <div className="">
            <p>Topics 3 and 4 of “The C programming language”</p>

            <p>
              ● Control flow statements (else if, loops, switch, break continue)
              <br />● Function and Program structure(Returning and
              non-returning, scope rules, Recursion)
              <br />
              <br />
              Programming Assignments will also be given.
            </p>
          </div>
        </div>

        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 w-3/4 text-lg font-semibold">
            5. Introduction to Embedded systems Part 1{" "}
          </h3>
          <div className="">
            <p>Basic Electronics and Introduction to microcontrollers</p>
            <p>Chapter 1 of “Internet of things with ESP8266”</p>

            <p>
              ● Arduino IDE installation and env setup for ESP8266
              <br />● Burning your first code on ESP8266 Project-based
              Assignments will also be given.
              <br />
              <br />
              Project-based Assignments will also be given.
            </p>
            <p className="w-full">
              <i>Mid-Term II: C Programming Quiz 1 in Week 9</i>
            </p>
          </div>
        </div>

        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 w-3/4 text-lg font-semibold">
            6. Introduction to Embedded systems Part 2{" "}
          </h3>
          <div className="">
            <p> Chapters 2-5 of “Internet of things with ESP8266”</p>
            <p>
              <br />● Connecting your hardware to wifi.
              <br />●
              <a
                href="
              https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-cust
              om-parameter-and-manage-your-ssid-and-password/"
                className="underline text-blue-900"
              >
                {" "}
                Link 1
              </a>
              <br />● Reading data from GPIOs.
              <br />●{" "}
              <a
                className="underline text-blue-900"
                href="https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-ard
uino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number)%20you%20are%20referring%20to."
              >
                Link 2
              </a>
              <br />● Controlling LEDs.
              <br />● Reading data from digital sensors.
              <br />●{" "}
              <a
                className="underline text-blue-900"
                href="https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-se
nsor-arduino-ide/"
              >
                Link 3
              </a>
              <br />● Cloud data logging.
              <br />●{" "}
              <a
                className="underline text-blue-900"
                href="https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html"
              >
                Link 4
              </a>
              <br />●{" "}
              <a
                className="underline text-blue-900"
                href="https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform"
              >
                Link 5
              </a>
              <br />●{" "}
              <a
                className="underline text-blue-900"
                href="https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver"
              >
                Link 6
              </a>
              <br />● Displaying data on the cloud.
              <br />●{" "}
              <a
                className="underline text-blue-900"
                href="https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud"
              >
                Link 7
              </a>
              <br />● Controlling controller remotely.
              <br />●{" "}
              <a
                className="underline text-blue-900"
                href="https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/"
              >
                Link 8
              </a>
              <br />● Controlling a lamp anywhere in the world.
              <br />● Interacting with different web services.
            </p>
          </div>
        </div>

        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 w-3/4 text-lg font-semibold">
            7. Embedded Programming using Rust (Extra Weeks in the Course)
          </h3>
          <div className="">
            ●
            <a
              className="underline text-blue-900 ml-1"
              href="https://www.rust-lang.org/what/embedded"
            >
              Link 1
            </a>
            <br />●
            <a
              className="underline text-blue-900 ml-1"
              href="https://crates.io/crates/esp8266"
            >
              Link 2
            </a>
          </div>
        </div>

        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 w-3/4 text-lg font-semibold">
            8. Hardware Requirements:
          </h3>
          <div className="">
            <p>
              a. Esp8266 (Node MCU)
              <br />
              b. Jumper Wires
              <br />
              c. Bread Board
              <br />
              d. LEDs
              <br />
              e. Sensors: (Dht11, ultrasonic sensor, IR sensor)
            </p>
          </div>
        </div>
      </div>
    </CoursePageLayout>
  );
}

export default QuarterFive;
