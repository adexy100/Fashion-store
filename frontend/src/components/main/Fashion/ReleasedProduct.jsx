import React from "react";
import styled from "styled-components";

import { ProductCard } from "../Card";
import { media } from "../../../variables";

function ReleasedProduct({ products }) {
  return (
    <Container>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and ${media.tablet}, ${media.desktop} {
  }
`;

export default ReleasedProduct;
