import React from "react";
import styled from "styled-components";

import subCategories from "../../../helpers/subCategories";
import SubCategoriesList from "./SubCategoriesList";
import { SeasonCard } from "../Card";
import womenSeasonBackground from "../../../images/gettyimages-573103007-2048x2048@2x.png";
import menSeasonBackground from "../../../images/gettyimages-573103007-2048x2048@2x.png";
import { media } from "../../../variables";

function CategoriesSearch({ type }) {
  return (
    <Container>
      {subCategories.map((item, index) => (
        <SubCategoriesList key={index} item={item} />
      ))}
      {type ? (
        type === "men" ? (
          <SeasonCard
            background={menSeasonBackground}
            season="Autumns"
            type="men"
            link="/fashion"
          />
        ) : (
          <SeasonCard
            background={womenSeasonBackground}
            season="Autumns"
            type="women"
            link="/fashion"
          />
        )
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  margin: 8rem 0rem;
  display: flex;
  justify-content: space-between;
  width: 70%;

  @media screen and ${media.tablet}, ${media.desktop} {
    width: 85%;
  }
`;

export default CategoriesSearch;
