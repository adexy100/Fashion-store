import React, { Fragment } from "react";
import styled from "styled-components";

import { H2 } from "../../atoms/Text";
import { Solid, media } from "../../../variables";
import Filtering from "../../organisms/Fashion//Filtering/Filtering";
import SubCategories from "../../organisms/Fashion/SubCategories";
import PopularCollections from "../../organisms/Fashion/PopularCollections";
import CustomSelect from "../../atoms/CustomSelect";
import { sortItems } from "../../data/filteringItems";
import BreadCrumb from "../../organisms/Fashion/BreadCrumb";

function SubCategoryMain() {
  return (
    <Fragment>
      <BreadCrumb current="Clothing" />
      <Wrapper>
        <Container>
          <TopWrapper>
            <Header>Sub-Category</Header>
            <CustomSelect label="Sort By" id="sort" options={sortItems} />
          </TopWrapper>
          <ContentWrapper>
            <Filtering />
            <SubCategories />
          </ContentWrapper>
        </Container>
      </Wrapper>
      <PopularCollections />
    </Fragment>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 70%;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and ${media.tablet}, ${media.desktop} {
    width: 85%;
  }
`;

const Header = styled(H2)`
  color: ${Solid.SECONDARY};
  margin-bottom: 3rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopWrapper = styled.div`
  width: 78%;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6rem;

  div:nth-child(2) {
    align-self: flex-end;
  }
`;

export default SubCategoryMain;
