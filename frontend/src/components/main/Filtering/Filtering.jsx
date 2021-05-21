import React from "react";
import styled from "styled-components";

import { H4, SmallSubHeading } from "../../../atoms/Text";
import { specialProducs } from "../../../data/productItems";
import SpecialProductCard from "../../../molecules/fashion/SpecialProductCard";
import TopTrending from "../../../assets/TopTrending.png";
import ColorSelector from "./ColorSelector";
import StyleSelector from "./StyleSelector";
import SizeSelector from "./SizeSelector";
import { media } from "../../../variables";

function Filtering() {
  return (
    <Container>
      <StyleSelector />
      <ColorSelector />
      <SizeSelector />
      <ContentWrapper>
        <Header>Special products</Header>
        {specialProducs.map((product, index) => (
          <SpecialProductCard key={index} product={product} />
        ))}
      </ContentWrapper>
      <ContentWrapper>
        <Image src={TopTrending} alt="top trending" />
        <TopTrendingHeader>Top Trending</TopTrendingHeader>
        <SubHeader>2020/2021</SubHeader>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;

  @media screen and ${media.tablet}, ${media.desktop} {
    width: 23.5%;
  }
`;

const Header = styled(H4)`
  margin-bottom: 3rem;
`;

const Image = styled.img`
  height: 381px;
  width: 100%;

  @media screen and ${media.tablet}, ${media.desktop} {
    height: 250px;
  }
`;

const TopTrendingHeader = styled(Header)`
  margin-bottom: 0rem;
`;

const SubHeader = styled(SmallSubHeading)``;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  align-items: center;

  @media screen and ${media.tablet}, ${media.desktop} {
    margin-top: 2.5rem;
  }
`;

export default Filtering;
