import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import productApi from "../services/api/productApi";
import { useState, useEffect } from "react";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productApi.getAllProducts().then((res) => {
      console.log(res);
      setProducts(res);
    }).catch((error) => {
      console.log(error);
    })
  } , []);

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
