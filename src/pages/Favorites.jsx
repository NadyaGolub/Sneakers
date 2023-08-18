import React  from "react";
import Cards from "../components/Card/Card";
import AppContext from "../components/context";
import { CardContainer, Title, TitleBox } from "./Favorites.styled";

function Favorites() {
  const {favorites, onAddToFavorite} = React.useContext(AppContext);

  

  return (
    <Title>
      <TitleBox>
        <h1>Мої закладки</h1>
      </TitleBox>
      <CardContainer>
        {favorites.map((item, index) => (
          <Cards
            key={index}
            
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </CardContainer>
    </Title>
  );
}

export default Favorites;
