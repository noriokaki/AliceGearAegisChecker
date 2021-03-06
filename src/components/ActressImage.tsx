import { graphql, useStaticQuery } from "gatsby";
import Img, { FixedObject } from "gatsby-image";
import React, { useEffect, useState } from "react";
import { AllImageFileQuery } from "../../types/graphql-types";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const templateImage = require("../../assets/images/mystery-person.jpg");

type Props = { filename?: string };
// 画像ファイルパスをプロパティに取るようなコンポーネントを定義
const ActressImage = ({
   filename = "mystery-person.jpg",
}: Props): JSX.Element => {
   const [image, setImage] = useState<
      undefined | AllImageFileQuery["images"]["edges"][0]
   >(undefined);

   // ページじゃないコンポーネントでもGraphQLが使えるように
   // StaticQueryを使う
   // GraphQLのクエリ引数には何も指定しない！
   const query: AllImageFileQuery = useStaticQuery(graphql`
      query AllImageFile {
         images: allFile {
            edges {
               node {
                  relativePath
                  name
                  childImageSharp {
                     fixed(
                        width: 80
                        height: 80
                        cropFocus: NORTH
                        quality: 85
                     ) {
                        ...GatsbyImageSharpFixed
                     }
                  }
               }
            }
         }
      }
   `);
   useEffect(() => {
      // 指定した画像ファイルパス（コンポーネントのプロパティ）と
      // 一致するgatsby-image用の情報を取得
      const image = query.images.edges.find((n) => {
         return n.node.name === filename;
      });
      setImage(image);
   }, []);

   const style = {
      width: "80px",
      marginBottom: 0,
      display: "flex",
      margin: "auto",
   } as const;
   if (image == null) {
      return <img src={templateImage} style={style} alt="no image" />;
   }

   return (
      <Img
         fixed={image.node.childImageSharp?.fixed as FixedObject}
         style={style}
         alt={filename}
      />
   );
};
export default ActressImage;
