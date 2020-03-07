import React from "react";
import Layout from "../components/Layout";
import MainContainer from "../components/MainContainer";
import SEO from "../components/Seo";

const IndexPage = (): JSX.Element => (
   <Layout>
      <SEO title="Home" />
      <MainContainer />
   </Layout>
);

export default IndexPage;
