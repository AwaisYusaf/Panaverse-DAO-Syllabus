// import React, { useRef } from "react";
// import Link from "next/link";
// import Head from "next/head";
// import { useRouter } from "next/router";
// import styles from "./style.module.css";
// function Course() {
//   const navRef = useRef(null);
//   const router = useRouter();
//   function openSideBar() {
//     console.log("open sidebar called");
//     console.log(navRef.current);
//     if (navRef.current) {
//       // @ts-ignore
//       navRef.current.style.display = "flex";
//       // @ts-ignore
//       navRef.current.style.animation = "openNavAnimation 0.5s linear";
//     }
//   }

//   function closeSideBar() {
//     if (navRef.current) {
//       // @ts-ignore
//       navRef.current.style.animation = "closeNavAnimation 0.5s linear";
//       setTimeout(() => {
//         if (navRef.current) {
//           // @ts-ignore
//           navRef.current.style.display = "none";
//         }
//       }, 500);
//     }
//   }

//   return (
//     <>
//       <Head>
//         <title>Quarter I - Panaverse</title>
//       </Head>
//       <div>
//         <div
//           className="bg-red-800 text-white w-fit flex justify-center fixed"
//           onMouseLeave={closeSideBar}
//         >
//           <div
//             className="flex flex-col items-center bg-red-800 z-10 h-screen"
//             onMouseEnter={openSideBar}
//           >
//             <Link
//               href={`/courses/${router.query.course}/q1`}
//               className="my-3 font-bold text-3xl px-3 h-6"
//             >
//               Q<sup>1</sup>
//             </Link>
//             <Link
//               href={`/courses/${router.query.course}/q2`}
//               className="my-3 font-bold text-3xl px-3 h-6"
//             >
//               Q<sup>2</sup>
//             </Link>
//             <Link
//               href={`/courses/${router.query.course}/q3`}
//               className="my-3 font-bold text-3xl px-3 h-6"
//             >
//               Q<sup>3</sup>
//             </Link>
//             <Link
//               href={`/courses/${router.query.course}/q4`}
//               className="my-3 font-bold text-3xl px-3 h-6"
//             >
//               Q<sup>4</sup>
//             </Link>
//             <Link
//               href={`/courses/${router.query.course}/q5`}
//               className="my-3 font-bold text-3xl px-3 h-6"
//             >
//               Q<sup>5</sup>
//             </Link>
//           </div>
//           <div
//             ref={navRef}
//             className="absolute hidden -right-40 z-0 text-white bg-red-800 flex-col w-44 text-center"
//           >
//             <div className="flex flex-col">
//               <Link
//                 href={`/courses/${router.query.course}/q1`}
//                 className="my-3 px-3 h-6"
//               >
//                 <p>First Quarter</p>
//               </Link>
//               <Link
//                 href={`/courses/${router.query.course}/q2`}
//                 className="my-3 px-3 h-6"
//               >
//                 <p>Second Quarter</p>
//               </Link>
//               <Link
//                 href={`/courses/${router.query.course}/q3`}
//                 className="my-3 px-3 h-6"
//               >
//                 <p>Third Quarter</p>
//               </Link>
//               <Link
//                 href={`/courses/${router.query.course}/q4`}
//                 className="my-3 px-3 h-6"
//               >
//                 <p>Forth Quarter</p>
//               </Link>
//               <Link
//                 href={`/courses/${router.query.course}/q5`}
//                 className="my-3 px-3 h-6"
//               >
//                 <p>Fifth Quarter</p>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className={styles.container}>
//           <div className="mt-4 w-full flex flex-col items-center">
//             <h1 className="my-4 font-semibold mb-8">Quarter I (Core)</h1>
//             <div className="lg:w-11/12 w-full flex lg:ml-0 ml-12 lg:flex-row flex-col-reverse justify-between">
//               <h1 className="font-bold text-2xl">
//                 CS-101: Object-Oriented Programming using TypeScript
//               </h1>
//               <p className="text-red-700">
//                 Duration: <span className="font-bold">13 weeks</span>
//               </p>
//             </div>
//             <div className="w-11/12 flex flex-col lg:ml-0 ml-6">
//               <h2 className="underline mt-6 text-lg font-semibold">
//                 Course description:
//               </h2>
//               <p>
//                 We will start the program by learning the fundamentals of
//                 Object-Oriented programming using JavaScript and TypeScript. We
//                 will also understand the latest Web trends i.e. Web 3.0 and
//                 Metaverse concepts and try to understand their working from the
//                 perspective of the users.
//               </p>
//               <h2 className="underline mt-6 text-lg font-semibold">
//                 Course Outline:
//               </h2>
//             </div>
//             <div className="w-10/12 flex flex-col">
//               <h3 className="mt-6 text-lg font-semibold">
//                 1. HTML & CSS (Homework)
//               </h3>
//               <div className="flex items-center">
//                 <p>Learn HTML by Hira Khan</p>
//                 <a
//                   className="underline text-blue-900 ml-1"
//                   href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
//                 >
//                   (Watch Recorded Videos)
//                 </a>
//               </div>
//               <div className="flex items-center">
//                 <p>Learn CSS Intro by Hira Khan </p>
//                 <a
//                   className="underline text-blue-900 ml-1"
//                   href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
//                 >
//                   (Watch Recorded Videos)
//                 </a>
//               </div>
//             </div>

//             <div className="w-10/12 flex flex-col">
//               <h3 className="mt-6 text-lg font-semibold">
//                 2. Web 3.0 and Metaverse Theory
//               </h3>
//               <div className="flex items-center">
//                 <p>Introduction to Panaverse DAO</p>
//                 <a
//                   className="underline text-blue-900 ml-1"
//                   href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"
//                 >
//                   (Download Slide)
//                 </a>
//               </div>
//               <div className="flex items-center">
//                 <p>Web 3.0 User Guide</p>
//                 <a
//                   className="underline text-blue-900 ml-1"
//                   href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"
//                 >
//                   (Download Slide)
//                 </a>
//               </div>
//               <p className="italic text-gray-500">
//                 Complete Web 3 Assignments included in the Web 3 User Guide
//               </p>
//               <div className="flex items-center">
//                 <p>Virtual and Augmented Metaverse User Guide</p>
//                 <a
//                   className="underline text-blue-900 ml-1"
//                   href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"
//                 >
//                   (Download Slide)
//                 </a>
//               </div>
//             </div>

//             <div className="w-10/12 flex flex-col">
//               <h3 className="mt-6 text-lg font-semibold">
//                 3. Fundamentals of JavaScript
//               </h3>
//               <div className="flex items-center">
//                 <p>Learn JavaScript by Zeeshan Hanif</p>
//                 <a
//                   className="underline text-blue-900 ml-1"
//                   href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"
//                 >
//                   (Watch Recorded Videos)
//                 </a>
//               </div>
//               <div className="flex items-center">
//                 <p className="w-3/4">
//                   Chapters 2-6, 13 of JavaScript from Beginner to Professional:
//                   Learn JavaScript quickly by building fun, interactive, and
//                   dynamic web apps, games, and pages
//                   <a
//                     className="underline text-blue-900 ml-1"
//                     href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4"
//                   >
//                     (Get Book)
//                   </a>
//                 </p>
//               </div>
//               <div className="flex items-center">
//                 <p>JavaScript Book Code</p>
//                 <a
//                   className="underline text-blue-900 ml-1"
//                   href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional"
//                 >
//                   (Visit)
//                 </a>
//               </div>
//               <div className="flex items-center">
//                 <p>Getting Started Exercises with JavaScript and Node.js</p>
//                 <a
//                   className="underline text-blue-900 ml-1"
//                   href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
//                 >
//                   (Visit)
//                 </a>
//               </div>
//               <p className="italic text-gray-500">
//                 Fundamentals of JavaScript and Node.js Quiz
//               </p>

//               <p className="font-semibold">Topics Covered in the Quiz:</p>

//               <p>
//                 {" "}
//                 A. Background of JavaScript and How to use JavaScript in Browser
//               </p>
//               <p>
//                 B. Variables, Primitive data types Analyzing and modifying data
//                 types, and Operators (Chapter 2 of JavaScript from Beginner to
//                 Professional)
//               </p>
//               <p>
//                 C. Intro to Node.js, .mjs files, Modules, NPM, import, export,
//                 and using external modules with npm:
//                 <a
//                   href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=s
//                 haring"
//                   className="text-blue-800 underline"
//                 >
//                   (Link)
//                 </a>
//               </p>
//               <p>
//                 D. How to accept user input in your Node.js JavaScript programs,
//                 this will allow us to create interactive Node.js console
//                 programs using prompt-sync library. The last example in this
//                 presentation shows you how to use prompt-sync library in your
//                 Node.js programs:
//                 <a
//                   className="text-blue-800 underline"
//                   href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=s
//                 haring"
//                 >
//                   (Link)
//                 </a>
//                 <br />
//                 Note: After this point, we will do all our class work and
//                 exercises using Node.js in .mjs files. We will also be able to
//                 develop interactive Node.js console programs which will greatly
//                 help the students to learn.
//               </p>
//               <p>
//                 E. Using Arrays and Objects in Node.js Programs (chapter 3 of
//                 JavaScript from Beginner to Professional)
//               </p>
//               <p>
//                 F. Using if and if else statements, else if statements,
//                 Conditional ternary operators, and switch statements in Node.js
//                 programs (chapter 4 of JavaScript from Beginner to Professional)
//               </p>
//               <p>
//                 G. Using while loop, do while loop, for loop, for in, and for of
//                 loop in Node.js (chapter 5 of JavaScript from Beginner to
//                 Professional)
//               </p>
//               <p>
//                 H. Using Basic functions, Function arguments, Return, Variable
//                 scope in functions, Recursive functions, Nested functions,
//                 Anonymous functions, and Function callbacks in Node.js (chapter
//                 6 of JavaScript from Beginner to Professional)
//               </p>
//               <p>
//                 I. Using Concurrency, Callbacks, Promises, async / await, and
//                 Event loop (chapter 13 of JavaScript from Beginner to
//                 Professional)
//               </p>
//               <p>
//                 J. JavaScript promises, mastering the asynchronous
//                 <a
//                   className="text-blue-800 underline"
//                   href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-async
//                 hronous-in-javascript"
//                 >
//                   (Link)
//                 </a>
//               </p>
//               <p>
//                 K. New JavaScript Features in ECMAScript 2022 and 2021
//                 <a
//                   className="text-blue-800 underline"
//                   href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg"
//                 >
//                   (Link)
//                 </a>
//               </p>
//             </div>

//             <div className="w-10/12 flex flex-col">
//               <h3 className="mt-6 text-lg font-semibold">
//                 4. Object-Oriented Programming with TypeScript
//               </h3>
//               <div className="flex items-center">
//                 <p>
//                   Chapters 1-11 of Learning TypeScript: Enhance Your Web
//                   Development Skills Using Type-Safe JavaScript
//                 </p>
//                 <a
//                   className="underline text-blue-900 ml-1"
//                   href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1
//                   _1"
//                 >
//                   (Get Book)
//                 </a>
//               </div>
//               <div className="flex items-center">
//                 <p>Learning Repository</p>
//                 <a
//                   className="underline text-blue-900 ml-1"
//                   href="https://github.com/panaverse/learn-typescript"
//                 >
//                   (Visit)
//                 </a>
//               </div>
//               <div className="flex items-center">
//                 <p>
//                   In Class Companion projects and articles for Learning
//                   TypeScript
//                 </p>
//                 <a
//                   className="underline text-blue-900 ml-1"
//                   href="https://www.learningtypescript.com/"
//                 >
//                   (Link)
//                 </a>
//               </div>
//               <div className="flex items-center">
//                 <p>Homework Projects</p>
//                 <a
//                   className="underline text-blue-900 ml-1"
//                   href="https://github.com/panaverse/typescript-node-projects"
//                 >
//                   (Link)
//                 </a>
//               </div>
//             </div>
//             <div className="w-10/12 flex flex-col">
//               <h3 className="mt-6 text-lg font-semibold">
//                 5. TypeScript for React
//               </h3>
//               <div className="flex items-center">
//                 <p>
//                   Minimal TypeScript Crash Course For React With Interactive
//                   Code Exercises
//                 </p>
//                 <a
//                   className="underline text-blue-900 ml-1"
//                   href="https://profy.dev/article/react-typescript"
//                 >
//                   (Visit)
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Course;

import React from "react";
import CoursePageLayout from "../../../components/CourseLayout";
function QuarterOne() {
  return (
    <CoursePageLayout>
      <div className="mt-4 w-full flex flex-col items-center">
        <h1 className="my-4 font-semibold mb-8">Quarter I (Core)</h1>
        <div className="lg:w-11/12 w-full flex lg:ml-0 ml-12 lg:flex-row flex-col-reverse justify-between">
          <h1 className="font-bold text-2xl">
            CS-101: Object-Oriented Programming using TypeScript
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
            We will start the program by learning the fundamentals of
            Object-Oriented programming using JavaScript and TypeScript. We will
            also understand the latest Web trends i.e. Web 3.0 and Metaverse
            concepts and try to understand their working from the perspective of
            the users.
          </p>
          <h2 className="underline mt-6 text-lg font-semibold">
            Course Outline:
          </h2>
        </div>
        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">
            1. HTML & CSS (Homework)
          </h3>
          <div className="flex items-center">
            <p>Learn HTML by Hira Khan</p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
            >
              (Watch Recorded Videos)
            </a>
          </div>
          <div className="flex items-center">
            <p>Learn CSS Intro by Hira Khan </p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
            >
              (Watch Recorded Videos)
            </a>
          </div>
        </div>

        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">
            2. Web 3.0 and Metaverse Theory
          </h3>
          <div className="flex items-center">
            <p>Introduction to Panaverse DAO</p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"
            >
              (Download Slide)
            </a>
          </div>
          <div className="flex items-center">
            <p>Web 3.0 User Guide</p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"
            >
              (Download Slide)
            </a>
          </div>
          <p className="italic text-gray-500">
            Complete Web 3 Assignments included in the Web 3 User Guide
          </p>
          <div className="flex items-center">
            <p>Virtual and Augmented Metaverse User Guide</p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"
            >
              (Download Slide)
            </a>
          </div>
        </div>

        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">
            3. Fundamentals of JavaScript
          </h3>
          <div className="flex items-center">
            <p>Learn JavaScript by Zeeshan Hanif</p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"
            >
              (Watch Recorded Videos)
            </a>
          </div>
          <div className="flex items-center">
            <p className="w-3/4">
              Chapters 2-6, 13 of JavaScript from Beginner to Professional:
              Learn JavaScript quickly by building fun, interactive, and dynamic
              web apps, games, and pages
              <a
                className="underline text-blue-900 ml-1"
                href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4"
              >
                (Get Book)
              </a>
            </p>
          </div>
          <div className="flex items-center">
            <p>JavaScript Book Code</p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional"
            >
              (Visit)
            </a>
          </div>
          <div className="flex items-center">
            <p>Getting Started Exercises with JavaScript and Node.js</p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
            >
              (Visit)
            </a>
          </div>
          <p className="italic text-gray-500">
            Fundamentals of JavaScript and Node.js Quiz
          </p>

          <p className="font-semibold">Topics Covered in the Quiz:</p>

          <p>
            {" "}
            A. Background of JavaScript and How to use JavaScript in Browser
          </p>
          <p>
            B. Variables, Primitive data types Analyzing and modifying data
            types, and Operators (Chapter 2 of JavaScript from Beginner to
            Professional)
          </p>
          <p>
            C. Intro to Node.js, .mjs files, Modules, NPM, import, export, and
            using external modules with npm:
            <a
              href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=s
                haring"
              className="text-blue-800 underline"
            >
              (Link)
            </a>
          </p>
          <p>
            D. How to accept user input in your Node.js JavaScript programs,
            this will allow us to create interactive Node.js console programs
            using prompt-sync library. The last example in this presentation
            shows you how to use prompt-sync library in your Node.js programs:
            <a
              className="text-blue-800 underline"
              href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=s
                haring"
            >
              (Link)
            </a>
            <br />
            Note: After this point, we will do all our class work and exercises
            using Node.js in .mjs files. We will also be able to develop
            interactive Node.js console programs which will greatly help the
            students to learn.
          </p>
          <p>
            E. Using Arrays and Objects in Node.js Programs (chapter 3 of
            JavaScript from Beginner to Professional)
          </p>
          <p>
            F. Using if and if else statements, else if statements, Conditional
            ternary operators, and switch statements in Node.js programs
            (chapter 4 of JavaScript from Beginner to Professional)
          </p>
          <p>
            G. Using while loop, do while loop, for loop, for in, and for of
            loop in Node.js (chapter 5 of JavaScript from Beginner to
            Professional)
          </p>
          <p>
            H. Using Basic functions, Function arguments, Return, Variable scope
            in functions, Recursive functions, Nested functions, Anonymous
            functions, and Function callbacks in Node.js (chapter 6 of
            JavaScript from Beginner to Professional)
          </p>
          <p>
            I. Using Concurrency, Callbacks, Promises, async / await, and Event
            loop (chapter 13 of JavaScript from Beginner to Professional)
          </p>
          <p>
            J. JavaScript promises, mastering the asynchronous
            <a
              className="text-blue-800 underline"
              href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-async
                hronous-in-javascript"
            >
              (Link)
            </a>
          </p>
          <p>
            K. New JavaScript Features in ECMAScript 2022 and 2021
            <a
              className="text-blue-800 underline"
              href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg"
            >
              (Link)
            </a>
          </p>
        </div>

        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">
            4. Object-Oriented Programming with TypeScript
          </h3>
          <div className="flex items-center">
            <p>
              Chapters 1-11 of Learning TypeScript: Enhance Your Web Development
              Skills Using Type-Safe JavaScript
            </p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1
                  _1"
            >
              (Get Book)
            </a>
          </div>
          <div className="flex items-center">
            <p>Learning Repository</p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://github.com/panaverse/learn-typescript"
            >
              (Visit)
            </a>
          </div>
          <div className="flex items-center">
            <p>
              In Class Companion projects and articles for Learning TypeScript
            </p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://www.learningtypescript.com/"
            >
              (Link)
            </a>
          </div>
          <div className="flex items-center">
            <p>Homework Projects</p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://github.com/panaverse/typescript-node-projects"
            >
              (Link)
            </a>
          </div>
        </div>
        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">
            5. TypeScript for React
          </h3>
          <div className="flex items-center">
            <p>
              Minimal TypeScript Crash Course For React With Interactive Code
              Exercises
            </p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://profy.dev/article/react-typescript"
            >
              (Visit)
            </a>
          </div>
        </div>
      </div>
    </CoursePageLayout>
  );
}

export default QuarterOne;
