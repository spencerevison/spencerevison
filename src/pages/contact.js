import React from "react";
import Layout from "components/Layout";
import SEO from "../components/SEO";

const ContactPage = ({ data: { page } }) => {
  return (
    <Layout>
      <SEO title={page.title} />
      <div className="container">contact</div>
    </Layout>
  );
};

export default ContactPage;
