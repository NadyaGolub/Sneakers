import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  
`;

export const CardDrawer = styled.div`
  position: absolute;
  width: 420px;
  height: 100%;
  right: 0;
  padding: 30px;
  background: #ffffff;
  box-shadow: -10px 4px 24px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export const BasketGoods = styled.h2`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
`;

export const ItemDrawer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Items = styled.h2`
  flex: 1;
  overflow: auto;
  margin-bottom: 40px;
`;

export const RemoveBtn = styled.svg`
  opacity: 0.5;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: opacity 0.15s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #f3f3f3;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  margin-right: 20px;
`;

export const CartItemNameBox = styled.div`
  margin-right: 20px;
`;

export const CartItemName = styled.p`
  margin-bottom: 5px;
  font-size: 16px;
`;

export const CartTotalBlock = styled.div`
  ul {
    display: block;
    margin-bottom: 40px !important;

    li {
      display: flex;
      align-items: flex-end;
      margin-bottom: 20px;

      div {
        flex: 1;
        height: 1px;
        border-bottom: 2px dashed #dfdfdf;
        position: relative;
        top: -4px;
        margin: 0 7px;
      }
    }
  }
`;

export const GreenButton = styled.button`
  width: 100%;
  height: 55px;
  background: #9dd558;
  border-radius: 18px;
  border: 0;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  position: relative;

  svg {
    position: absolute;
    right: 50px;
    top: 20px;
    transition: transform 0.15s ease-in-out;
  }

  img {
    position: absolute;
    left: 50px;
    top: 20px;
    transition: transform 0.15s ease-in-out;
  }
  &:disabled {
    background-color: #bebebe;
    cursor: default;
  }

  &:hover {
    background: #71d558;

    svg {
      transform: translateX(5px);
    }

    img {
      transform: translateX(-5px);
    }
  }

  &:active {
    background: #4fc26a;
  }
`;



