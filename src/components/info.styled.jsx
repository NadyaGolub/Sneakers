import styled from "styled-components";

export const CartEmpty = styled.div`
text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex:auto;
`;

export const Img = styled.img`
  margin-right: 20px;
`;

export const Text = styled.div`
  opacity: 0.6;
  width: 280px;
  line-height: 24px;
 margin-top: 10px;
 margin-bottom: 20px;
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