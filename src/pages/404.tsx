import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

const NotFoundPage = (): JSX.Element => (
   <Layout>
      <SEO titleName="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>ページが見つかりません！</p>
   </Layout>
);

export default NotFoundPage;
