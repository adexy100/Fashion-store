import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { H2 } from "../../../components/others/Text";
import { Solid, media } from "../../../variables";
import { ReleasedProduct } from "../../../components/main";
import { SubCategoryCard } from "../../../components/main";
import { productItems, womenProducts } from "../../../helpers/productItems";
import { listSubs } from "../../../redux/actions/subCategoryActions";

function ThirdBox() {
  const dispatch = useDispatch();
  const subList = useSelector((state) => state.subList);
  const { subs } = subList;

  useEffect(() => {
    dispatch(listSubs());
  }, [dispatch]);
  return (
    <Wrapper>
      <Container>
        <NewReleases>
          <Header> Best Deals</Header>
          <ReleasedProduct products={productItems} />
        </NewReleases>
        <SeasonSales>
          {subs &&
            subs.map((sub) => (
              <SubCategoryCard
                key={sub._id}
                background={sub.image.url}
                name={sub.name}
                desc={sub.desc}
                slug={sub.slug}
              />
            ))}
        </SeasonSales>
        <Header>New Releases</Header>
        <ReleasedProduct products={womenProducts} />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  @media screen and ${media.tablet}, ${media.desktop} {
    width: 95%;
  }
`;

const Header = styled(H2)`
  color: ${Solid.SECONDARY};
  text-align: center;
  margin-bottom: 5rem;
  margin: 5rem 0rem;
`;

const NewReleases = styled.div``;

const SeasonSales = styled.div`
  height: 45vh;
  margin-top: 6rem;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  @media screen and ${media.tablet}, ${media.desktop} {
    height: 25vh;
  }
`;

export default ThirdBox;
