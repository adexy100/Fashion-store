import React from "react";
import styled from "styled-components";

import image1 from "../../assets/Rectangle 549@2x.png";
import image2 from "../../assets/Rectangle 550@2x.png";
import image3 from "../../assets/Rectangle 551@2x.png";
import image4 from "../../assets/Rectangle 552@2x.png";
import SeasonCard from "../../molecules/fashion/SeasonCard";
import { H2 } from "../../atoms/Text";
import { Solid, media } from "../../variables";

function PopularCollections() {
  return (
    <Container>
      <Wrapper>
        <Header>Popular Collections</Header>
        <ContentWrapper>
          <SeasonCard
            background={image1}
            header="Sweatshirts"
            link="/fashion"
            textColor="black"
          />
          <RightBox>
            <InnerBoxWrapper>
              <SeasonCard
                background={image2}
                header="Sweatshirts"
                link="/fashion"
                textColor="black"
              />
              <SeasonCard
                background={image3}
                header="Sweatshirts"
                link="/fashion"
              />
            </InnerBoxWrapper>
            <SeasonCard
              background={image4}
              header="Sweatshirts"
              link="/fashion"
              height={48}
              width={100}
              textColor="black"
            />
          </RightBox>
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  margin-bottom: 3rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
`;

const Header = styled(H2)`
  color: ${Solid.SECONDARY};
  text-align: center;
  margin-bottom: 5rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 55vh;

  @media screen and ${media.tablet}, ${media.desktop} {
    height: 35vh;
  }
`;

const RightBox = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
`;

const InnerBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 48%;
`;

export default PopularCollections;
