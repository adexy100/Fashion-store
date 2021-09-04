import React from "react";
import styled from "styled-components";
import { CustomSearch } from "../Search";

import { Solid, type, media } from "../../../variables";
import CategoriesSearch from "./CategoriesSearch";

function FashionHeader() {
  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <CategorySwitch>
            <CategoryItem>
              Mens
              <Category>
                <CategoriesSearch type="men" />
              </Category>
            </CategoryItem>
            <CategoryItem>
              Womens
              <Category>
                <CategoriesSearch type="women" />
              </Category>
            </CategoryItem>
          </CategorySwitch>
          <CustomSearch />
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${Solid.SECONDARY};
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-end;

  @media screen and ${media.tablet}, ${media.desktop} {
    width: 90%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 55%;
  align-items: center;
  justify-content: space-between;
`;

const CategorySwitch = styled.div`
  display: flex;
  width: 22%;
  justify-content: space-between;

  @media screen and ${media.tablet}, ${media.desktop} {
    width: 25%;
  }
`;

const Category = styled.div`
  display: none;
  justify-content: center;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0 100vh 0 100vh rgba(0, 0, 0, 0.5), 0 0px 0px rgba(0, 0, 0, 0.5);
  width: 100%;
  left: 0;
  z-index: 1;
`;

const CategoryItem = styled.div`
  font-size: 1.8rem;
  font-family: ${type.OSWALD};
  color: white;
  font-weight: 400;

  &:hover {
    color: ${Solid.PRIMARY};
  }

  &:hover div {
    display: flex;
  }

  @media screen and ${media.tablet}, ${media.desktop} {
    font-size: 1.6rem;
  }
`;

export default FashionHeader;
