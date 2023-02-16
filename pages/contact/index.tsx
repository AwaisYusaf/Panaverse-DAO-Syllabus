import React from "react";
import Head from "next/head";
import PageLayout from "../../components/PageLayout";
import Footer from "../../components/Footer";
function Contact() {
  return (
    <>
      <Head>
        <title>Panaverse | Contact</title>
      </Head>
      <PageLayout>
        <section className="min-h-screen">Contact</section>
      </PageLayout>
      <Footer />
    </>
  );
}

export default Contact;
