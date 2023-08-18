import React from "react";
import Cards from "../components/Card/Card";

import {
  CardContainer,
  Input,
  SearchBlock,
  Title,
  TitleBox,
} from "./Home.styled";

function Home({
  items,
  searchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {
  

  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(12)] : filtredItems).map((item, index) => (
      <Cards
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <Title>
      <TitleBox>
        <h1>
          {searchValue ? `Пошук по запиту: "${searchValue}` : "Всі кросівки"}
        </h1>
        <SearchBlock>
          <svg width={20} height={20}>
            <use href="./img/symbol-defs.svg#search"></use>
          </svg>
          <Input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Пошук ..."
          />
        </SearchBlock>
      </TitleBox>
      <CardContainer>{renderItems()}</CardContainer>
    </Title>
  );
}

export default Home;
