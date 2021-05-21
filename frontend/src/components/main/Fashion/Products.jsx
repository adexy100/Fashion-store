import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import Pagination from "react-js-pagination";

import ProductCard from "../../molecules/fashion/ProductCard";
import Button from "../../atoms/Button";
import { media } from "../../variables";
import { getAllProducts } from "../../actions/productActions";
import ProductSkeleton from "../../atoms/ProductSkeleton";

const PaginateNext = () => {
  return (
    <Action size="sm" variant="primary">
      Next
    </Action>
  );
};

const PaginatePrev = () => {
  return (
    <Action size="sm" variant="primary">
      Prev
    </Action>
  );
};

function Products() {
  const productList = useSelector((state) => state.allProducts);
  const { loading, products } = productList;

  const dispatch = useDispatch();

  const [productsCount, setProductsCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllProducts("createdAt", "desc", page));
  }, [dispatch, page]);

  const getProductsCount = async () => await axios.get("/api/products/total");

  useEffect(() => {
    getProductsCount().then((res) => setProductsCount(res.data));
  }, []);

  return (
    <Container>
      {loading ? (
        <ProductSkeleton count={12} />
      ) : (
        <>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
          <Actions>
            <Pagination
              hideFirstLastPages
              activePage={page}
              totalItemsCount={(productsCount / 12) * 10}
              onChange={(value) => setPage(value)}
              pageRangeDisplayed={5}
              nextPageText={<PaginateNext />}
              prevPageText={<PaginatePrev />}
              activeClass="active"
              itemClassLast="items"
            />
          </Actions>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 78%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and ${media.tablet}, ${media.desktop} {
    width: 75%;
  }
`;

const Actions = styled.div`
  margin-top: 5rem;
  font-size: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;

  .active {
    display: none;
  }
  .item {
    color: inherit;
  }
`;

const Action = styled(Button)`
  width: 10rem;
  margin-left: 4rem;
  margin-right: 4rem;
`;

export default Products;
