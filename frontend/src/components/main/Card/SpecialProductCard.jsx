import React from "react";
import styled from "styled-components";

import {
  SmallSubHeading,
  SubHeading,
  MediumSubHeading,
} from "../../atoms/Text";
import { Solid, media } from "../../variables";

function SpecialProductCard({ product }) {
  return (
    <Wrapper>
      <Image src={product.image} alt={product.name} />
      <Content>
        <Gender>{product.gender}</Gender>
        <ProductName>{product.name}</ProductName>
        <Price>
          <ActualPrice>${product.actualPrice}</ActualPrice>
          <DiscountPrice>${product.discountPrice}</DiscountPrice>
        </Price>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  width: 100%;
`;

const Image = styled.img`
  width: 35%;
  height: 130px;

  @media screen and ${media.tablet}, ${media.desktop} {
    width: 33%;
    width: 100px;
  }
`;

const Content = styled.div`
  width: 63%;
  display: flex;
  flex-direction: column;
`;

const Gender = styled(SmallSubHeading)`
  font-size: 1.2rem;
  color: ${Solid.GREY};
  text-transform: uppercase;
`;

const ProductName = styled(SubHeading)`
  margin-top: 1rem;
  color: ${Solid.SECONDARY};
  font-weight: bold;
  font-size: 1.3rem;

  @media screen and ${media.desktop} {
    font-size: 1.4rem;
  }

  @media screen and ${media.tablet} {
    font-size: 1.2rem;
  }
`;

const Price = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.2s;
`;

const ActualPrice = styled(MediumSubHeading)`
  text-decoration: line-through;
  font-size: 1.6rem;
`;

const DiscountPrice = styled(MediumSubHeading)`
  color: ${Solid.PRIMARY};
  font-size: 1.6rem;
`;

export default SpecialProductCard;
