import React, { Fragment } from "react";
import styled from "styled-components";
import { H2 } from "../../atoms/Text";
import { wishListProducts } from "../../data/productsItems";
import ProductCard from "../../molecules/fashion/ProductCard";

import BreadCrumb from "../../organisms/Fashion/BreadCrumb";
import { media, Solid } from "../../../variables";

function WishList() {
  return (
    <Fragment>
      <BreadCrumb current="Wishlist" />
      <Wrapper>
        <Container>
          <Header>Wishlist</Header>
          <ContentWrapper>
            {wishListProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
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
  margin: 5rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and ${media.tablet}, ${media.desktop} {
    width: 85%;
  }
`;

const Header = styled(H2)`
  color: ${Solid.SECONDARY};
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 4rem 0rem;
`;

export default WishList;
