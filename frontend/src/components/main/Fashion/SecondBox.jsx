import React, { useEffect, Fragment } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import CategoryCard from "../../molecules/fashion/CategoryCard";
import { media } from "../../variables";
import { listCategories } from "../../actions/categoryActions";

function SecondBox() {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  return (
    <Fragment>
      <Container>
        {categories.map((category) => (
          <CategoryCard
            key={category._id}
            background={category.image.url}
            name={category.name}
            desc={category.desc}
            slug={category.slug}
          />
        ))}
      </Container>
    </Fragment>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
  height: 60vh;

  @media screen and ${media.tablet}, ${media.desktop} {
    height: 23vh;
    margin-top: 1rem;
  }
`;

export default SecondBox;
