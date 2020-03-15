import Container from "@material-ui/core/Container";
import { graphql, useStaticQuery } from "gatsby";
import React, { useReducer } from "react";
import { ActressesListQuery } from "../../types/graphql-types";
import { ActressType } from "../models/DataTypes";
import reducer from "../models/Reducer";
import ActressesList from "./ActressesList";
import AffiliationRate from "./AffiliationRate";
import FilterBlock from "./FilterBlock";
import Spacer from "./Spacer";

const actressesListItem = (): readonly ActressType[] => {
   const data: ActressesListQuery = useStaticQuery(graphql`
      query ActressesList {
         allActressJson {
            edges {
               node {
                  id
                  attribute
                  name
                  shortName
                  imagePath
                  another
               }
            }
         }
      }
   `);

   return data.allActressJson.edges
      .map((item) => {
         return {
            id: item.node.id,
            name: item.node.name,
            shortName: item.node.shortName,
            attribute: item.node.attribute,
            isSelect: false,
            imagePath: item.node.imagePath,
            another: item.node.another,
         } as ActressType;
      })
      .filter((v): v is ActressType => v !== null);
};

const MainContainer = (): JSX.Element => {
   const [state, dispatch] = useReducer(reducer, {
      actresses: actressesListItem(),
      attributeFilter: {
         enable: true,
         heat: true,
         electric: true,
         gravity: true,
         freeze: true,
      },
   });

   return (
      <Container>
         <AffiliationRate actresses={state.actresses}></AffiliationRate>
         <Spacer />
         <FilterBlock
            attributeFilter={state.attributeFilter}
            dispatch={dispatch}
         ></FilterBlock>
         <Spacer />
         <ActressesList state={state} dispatch={dispatch} />
      </Container>
   );
};

export default React.memo(MainContainer);
