import React from "react";
import styled from "styled-components";

import { ExpandingButton } from "../Button";
import {
  MediumSubHeading,
  SmallSubHeading,
  SubHeading,
} from "../../others/Text";
import bag from "../../../images/local_mall-24px.svg";
import { Solid, media } from "../../../variables";
import { ReactComponent as WishIcon } from "../../../images/favorite_border-24px.svg";
import { ReactComponent as CompareIcon } from "../../../images/compare-24px.svg";
import { ReactComponent as SearchIcon } from "../../../images/search-24px.svg";
import image2 from "../../../images/product-image-2.png";

function ProductCard({ product }) {
  const { images, name, actualPrice, discountPrice, category } = product;
  return (
    <Container>
      <Top>
        <Image src={images && images.length ? images[0].url : image2} />
        <Actions className="actions">
          <SearchAction />
          <CompareAction />
        </Actions>
      </Top>
      <Gender>{category ? category.name : ""}</Gender>
      <ProductName>{name}</ProductName>
      <Wrapper>
        <Footer>
          <ExpandingButton icon={bag} text="Add to cart" />
          <Price>
            <ActualPrice>${actualPrice}</ActualPrice>
            <DiscountPrice>${discountPrice}</DiscountPrice>
          </Price>
        </Footer>
        <WishAction />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 28rem;
  margin: 1rem;

  &:hover .actions {
    display: flex;
  }

  @media screen and ${media.desktop} {
    width: 20rem;
    margin: 1rem;
  }

  @media screen and ${media.tablet} {
    width: 16rem;
    margin: 1rem;
  }
`;

const Image = styled.img`
  height: 30rem;
  width: 100%;
  object-fit: cover;

  @media screen and ${media.desktop} {
    height: 18rem;
  }

  @media screen and ${media.tablet} {
    height: 14rem;
  }
`;

const Top = styled.div`
  width: 100%;
  position: relative;
`;

const Actions = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: none;
  flex-direction: column;
  height: 40%;
  justify-content: space-between;
  padding: 1rem;
`;

const CompareAction = styled(CompareIcon)`
  transition: transform 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const SearchAction = styled(SearchIcon)`
  transition: transform 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const Gender = styled(SmallSubHeading)`
  margin-top: 1rem;
  font-size: 1.4rem;
  color: ${Solid.GREY};
  text-transform: uppercase;
`;

const ProductName = styled(SubHeading)`
  margin-top: 1rem;
  color: ${Solid.SECONDARY};
  font-weight: 400;
  font-size: 1.8rem;

  @media screen and ${media.desktop} {
    font-size: 1.6rem;
  }

  @media screen and ${media.tablet} {
    font-size: 1.4rem;
  }
`;

const Wrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Footer = styled.div`
  display: flex;
`;

const WishAction = styled(WishIcon)`
  transition: transform 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const Price = styled.div`
  margin-left: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.2s;
`;

const ActualPrice = styled(MediumSubHeading)`
  text-decoration: line-through;
`;

const DiscountPrice = styled(MediumSubHeading)`
  color: ${Solid.PRIMARY};
`;

export default ProductCard;
