import styled from 'styled-components';

export const ProductContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.product_bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-radius: 6px;
  padding: 24px;
  margin-bottom: 20px;
  margin-top: 35px;
  cursor: pointer;
`;

export const ProductWrapper = styled.div`
  margin-bottom: 10px;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Model = styled.p`
  color: ${({ theme }) => theme.colors.text_color};
  font-size: ${({ theme }) => theme.font_size.sm};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.font_weight.bold};
  line-height: 1.2;
`;

export const Brand = styled.p`
  color: ${({ theme }) => theme.colors.text_color};
  font-size: ${({ theme }) => theme.font_size.sm};
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.font_size.lg};
  font-weight: ${({ theme }) => theme.font_weight.bold};
  color: ${({ theme }) => theme.colors.dark};
`;
