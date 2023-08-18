import React from "react";
import { CartEmpty, GreenButton, Img, Text } from "./info.styled";
import AppContext from "./context";


const Info = ({  title, image, description }) => {
    const {setCatdOpened } = React.useContext(AppContext);

    return (
        <CartEmpty>
            <Img
              width="120px"
             
              src={image}
              alt="Empty"
            />
            <h2>{title}</h2>
            <Text>
              {description}
            </Text>
            <GreenButton onClick={( ) => setCatdOpened(false)}>
              <img src="/img/arrow-empty.svg" alt="Arrow" />
              Повернутися назад
            </GreenButton>
          </CartEmpty>
    )
}

export default Info;