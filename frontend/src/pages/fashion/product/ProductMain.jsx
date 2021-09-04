import React, { Fragment } from "react";
import styled from "styled-components";

import { H2 } from "../../../components/others/Text";
import { Solid, media } from "../../../variables";
import { Filtering, Products, CustomSelect } from "../../../components/main";
import { sortItems } from "../../../helpers/filteringItems";
import BreadCrumb from "../../../components/others/BreadCrumb";

function ProductMain() {
  return (
    <Fragment>
      <BreadCrumb current="Products" />
      <Wrapper>
        <Container>
          <TopWrapper>
            <Header>Featured Products</Header>
            <CustomSelect label="Sort By" id="sort" options={sortItems} />
          </TopWrapper>
          <ContentWrapper>
            <Filtering />
            <Products />
          </ContentWrapper>
        </Container>
      </Wrapper>
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

export default ProductMain;
