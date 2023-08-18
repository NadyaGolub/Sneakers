import styled from "styled-components";

export const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  border-bottom: 1px solid #eaeaea;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  margin-right: 20px;
`;

export const NameShop = styled.h3`
  text-transform: uppercase;
`;

export const ShopTitle = styled.p`
  opacity: 0.5;
`;

export const HeaderRight = styled.ul`
  display: flex;
`;

export const Basket = styled.li`
  margin-right: 15px;
  cursor: pointer;
`;

export const SvgBasket = styled.svg`
  margin-right: 15px;
  width: 18px;
  height: 18px;
`;