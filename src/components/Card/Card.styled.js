import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #f3f3f3;
  padding: 30px;
  width: 220px;
  border-radius: 40px;
  margin-right: 30px;
  margin-bottom: 30px;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
  

  &:hover {
    box-shadow: 0px 20px 35px rgba(0, 0, 0, 0.06);
    transform: translateY(-5px);
  }
`;

export const Favorite = styled.div`
  position: absolute;
  cursor: pointer;
`;

export const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Plus = styled.img`
  cursor: pointer;
`;