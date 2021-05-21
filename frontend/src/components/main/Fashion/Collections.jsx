import React from "react";

import styled from "styled-components";
import { Solid, media } from "../../variables";
import { H2 } from "../../atoms/Text";
import CollectionCard from "../../molecules/fashion/CollectionCard";
import lifeStyleIcon from "../../assets/lifestyleImage.png";
import hoodImage from "../../assets/hood.png";
import apparelImage from "../../assets/apparelImage.png";
import capImage from "../../assets/capImage.png";
import juggerImage from "../../assets/juggerImage.png";

function FourthBox() {
  return (
    <Container>
      <Wrapper>
        <Header>Popular Collections</Header>
        <CategoryWrapper>
          <Box>
            <CollectionCard background={hoodImage} header="Hoods" height={47} />
            <CollectionCard
              background={apparelImage}
              header="Apparel"
              height={45}
            />
          </Box>
          <CollectionCard
            background={lifeStyleIcon}
            header="Lifestyle"
            width={50}
          />
          <Box>
            <CollectionCard background={capImage} header="Caps" height={47} />
            <CollectionCard
              background={juggerImage}
              header="Juggers"
              height={45}
            />
          </Box>
        </CategoryWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  margin: 8rem 0rem;
  display: flex;
  justify-content: center;

  @media screen and ${media.tablet}, ${media.desktop} {
    margin: 6rem 0rem;
  }
`;

const Header = styled(H2)`
  color: ${Solid.SECONDARY};
  text-align: center;
  margin-bottom: 5rem;
`;

const Wrapper = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
`;

const CategoryWrapper = styled.div`
  display: flex;
  height: 45vh;
  justify-content: space-between;

  @media screen and ${media.tablet}, ${media.desktop} {
    height: 20vh;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22%;
`;

export default FourthBox;
