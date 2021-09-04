import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

import { ExpandingButton } from "../main";
import { media } from "../../variables";

const ProductSkeleton = ({ count }) => {
  const cards = () => {
    let totalCards = [];

    for (let i = 0; i < count; i++) {
      totalCards.push(
        <Container>
          <Card>
            <Skeleton className="card" />
          </Card>
          <ProductName>
            <Skeleton className="name" />
          </ProductName>
          <Footer>
            <Skeleton className="box" />
            <Skeleton className="content" />
          </Footer>
        </Container>
      );
    }
    return totalCards;
  };

  return <>{cards()}</>;
};

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
const Card = styled.div`
  .card {
    border: none;
    height: 30rem;
    width: 28rem;
    margin: 1rem;

    @media screen and ${media.desktop} {
      width: 20rem;
    }

    @media screen and ${media.tablet} {
      width: 16rem;
      height: 15rem;
    }
  }
`;

const ProductName = styled.p`
  .name {
    margin: none;
    margin: 1rem;
    font-weight: 400;
    font-size: 1.8rem;

    @media screen and ${media.desktop} {
      font-size: 1.6rem;
    }

    @media screen and ${media.tablet} {
      font-size: 1.4rem;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  margin: 1rem;

  .box {
    border: none;
    height: 4rem;
    width: 4rem;

    @media screen and ${media.desktop} {
      width: 4rem;
    }

    @media screen and ${media.tablet} {
      width: 3rem;
      height: 3rem;
    }
  }
  .content {
    border: none;
    height: 2rem;
    width: 20rem;
    margin-left: 2rem;
    margin-top: 1rem;

    @media screen and ${media.desktop} {
      width: 18rem;
    }

    @media screen and ${media.tablet} {
      margin-left: 1rem;
      width: 10rem;
      height: 2rem;
    }
  }
`;

export default ProductSkeleton;
