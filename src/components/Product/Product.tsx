import React from 'react';
import type { ProductType } from '../../types/productType';
import { Model, InfoBlock, Price, ProductContainer, Title, Brand } from './Product.styled';

type ProductItemProps = {
  products: ProductType[];
};

export const ProductItem: React.FC<ProductItemProps> = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <ProductContainer key={product.id}>
          <InfoBlock>
            <Model>{product.model}</Model>
            <Title>{product.name}</Title>
            <Brand>{product.brand}</Brand>
          </InfoBlock>
          <Price>${product.price.toFixed(2)}</Price>
        </ProductContainer>
      ))}
    </>
  );
};
