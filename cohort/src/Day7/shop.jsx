import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Image src={product.image} />
      <Title>{product.title}</Title>
      <Price>${product.price}</Price>
      <Description>{product.description}</Description>
    </Card>
  );
};
const ProductList = ({ products }) => {
  return (
    <Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
  );
};
const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <ProductList products={products} />
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 10px;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  margin: 10px;
`;

export default App;