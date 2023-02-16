import React, { useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./style.module.css";
import Footer from "../Footer";
function Course({ children }: any) {
  const navRef = useRef(null);
  const router = useRouter();
  function openSideBar() {
    console.log("open sidebar called");
    console.log(navRef.current);
    if (navRef.current) {
      // @ts-ignore
      navRef.current.style.display = "flex";
      // @ts-ignore
      navRef.current.style.animation = "openNavAnimation 0.5s linear";
    }
  }

  function closeSideBar() {
    if (navRef.current) {
      // @ts-ignore
      navRef.current.style.animation = "closeNavAnimation 0.5s linear";
      setTimeout(() => {
        if (navRef.current) {
          // @ts-ignore
          navRef.current.style.display = "none";
        }
      }, 500);
    }
  }

  return (
    <>
      <div>
        <div
          className="bg-red-800 text-white w-fit flex justify-center fixed"
          onMouseLeave={closeSideBar}
        >
          <div
            className="flex flex-col items-center bg-red-800 z-10 h-screen"
            onMouseEnter={openSideBar}
          >
            <Link
              href={`/courses/${router.pathname.split("/")[2]}/q1`}
              className="my-3 font-bold text-3xl px-3 h-6"
            >
              Q<sup>1</sup>
            </Link>
            <Link
              href={`/courses/${router.pathname.split("/")[2]}/q2`}
              className="my-3 font-bold text-3xl px-3 h-6"
            >
              Q<sup>2</sup>
            </Link>
            <Link
              href={`/courses/${router.pathname.split("/")[2]}/q3`}
              className="my-3 font-bold text-3xl px-3 h-6"
            >
              Q<sup>3</sup>
            </Link>
            <Link
              href={`/courses/${router.pathname.split("/")[2]}/q4`}
              className="my-3 font-bold text-3xl px-3 h-6"
            >
              Q<sup>4</sup>
            </Link>
            <Link
              href={`/courses/${router.pathname.split("/")[2]}/q5`}
              className="my-3 font-bold text-3xl px-3 h-6"
            >
              Q<sup>5</sup>
            </Link>
          </div>
          <div
            ref={navRef}
            className="absolute hidden -right-40 z-0 text-white bg-red-800 flex-col w-44 text-center"
          >
            <div className="flex flex-col">
              <Link
                href={`/courses/${router.pathname.split("/")[2]}/q1`}
                className="my-3 px-3 h-6"
              >
                <p>First Quarter</p>
              </Link>
              <Link
                href={`/courses/${router.pathname.split("/")[2]}/q2`}
                className="my-3 px-3 h-6"
              >
                <p>Second Quarter</p>
              </Link>
              <Link
                href={`/courses/${router.pathname.split("/")[2]}/q3`}
                className="my-3 px-3 h-6"
              >
                <p>Third Quarter</p>
              </Link>
              <Link
                href={`/courses/${router.pathname.split("/")[2]}/q4`}
                className="my-3 px-3 h-6"
              >
                <p>Forth Quarter</p>
              </Link>
              <Link
                href={`/courses/${router.pathname.split("/")[2]}/q5`}
                className="my-3 px-3 h-6"
              >
                <p>Fifth Quarter</p>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Course;
