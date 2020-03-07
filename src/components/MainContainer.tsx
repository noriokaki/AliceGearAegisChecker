import Container from "@material-ui/core/Container";
import React from "react";
import ActressesList from "./ActressesList";
import AffiliationRate from "./AffiliationRate";
import FilterBlock from "./FilterBlock";
import Spacer from "./Spacer";

const MainContainer = (): JSX.Element => {
   return (
      <Container>
         <AffiliationRate></AffiliationRate>
         <Spacer />
         <FilterBlock></FilterBlock>
         <Spacer />
         <ActressesList />
      </Container>
   );
};

export default MainContainer;
