import React from "react";
import Actress from "../components/Actress";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

const IndexPage = (): JSX.Element => (
   <Layout>
      <SEO title="Home" />
      <div>ここに所持率を表示</div>
      <div>フィルター</div>
      <ul>
         <li>
            <Actress
               name={"名前1"}
               onClick={(): void => {
                  return undefined;
               }}
            />
         </li>
         <li>
            <Actress name={"名前2"} onClick={(): void => alert("hello")} />
         </li>
      </ul>
      {/* <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
         <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> */}
   </Layout>
);

export default IndexPage;
