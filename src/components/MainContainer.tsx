import Container from "@material-ui/core/Container";
import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useReducer } from "react";
import { ActressesListQuery } from "../../types/graphql-types";
import { select } from "../models/ActionCreator";
import { ActressType } from "../models/DataTypes";
import reducer from "../models/Reducer";
import ActressesList from "./ActressesList";
import AffiliationRate from "./AffiliationRate";
import FilterBlock from "./FilterBlock";
import Spacer from "./Spacer";
import { db } from "./Storage";

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
   useEffect(() => {
      const f = async (): Promise<void> => {
         const initStorage = (await db.actress.toArray()).filter(
            (v) => v.isSelect,
         );
         state.actresses
            .filter((v) => initStorage.some((s) => s.id === v.id))
            .forEach((v) => dispatch(select(v.id)));
      };
      f();
   }, []);
   return (
      <Container>
         <AffiliationRate state={state}></AffiliationRate>
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
