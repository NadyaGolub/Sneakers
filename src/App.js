import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import AppContext from './components/context';
import { Wrapper } from './App.styled';
import { GlobalStyle } from './GlobalStyle';

import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCatdOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const cartResponse = await axios.get(
          'https://64d64067754d3e0f1361d63b.mockapi.io/cart'
        );
        const favoritesResponse = await axios.get(
          'https://64d8e8a45f9bf5b879ceae8b.mockapi.io/favorites'
        );
        const itemsResponse = await axios.get(
          'https://64d64067754d3e0f1361d63b.mockapi.io/items'
        );

        setIsLoading(false);

        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Помилка при запиті даних');
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async obj => {
    try {
      const findItems = cartItems.find(
        item => Number(item.parentId) === Number(obj.id)
      );
      if (findItems) {
        setCartItems(prev =>
          prev.filter(item => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://64d64067754d3e0f1361d63b.mockapi.io/cart/${findItems.id}`
        );
      } else {
        setCartItems(prev => [...prev, obj]);
        const { data } = await axios.post(
          'https://64d64067754d3e0f1361d63b.mockapi.io/cart',
          obj
        );
        setCartItems(prev =>
          prev.map(item => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert('Помилка при додаванні у кошик');
    }
  };

  const onRemoveItem = id => {
    try {
      axios.delete(`https://64d64067754d3e0f1361d63b.mockapi.io/cart/${id}`);

      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Помилка при видаленні з кошика');
      console.error(error);
    }
  };

  const onAddToFavorite = async obj => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://64d8e8a45f9bf5b879ceae8b.mockapi.io/favorites/${obj.id}`
        );
        setFavorites(prev =>
          prev.filter(item => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          'https://64d8e8a45f9bf5b879ceae8b.mockapi.io/favorites',
          obj
        );

        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не вдалося добавити в фаворити');
    }
  };

  const onChangeSearchInput = event => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = id => {
    return cartItems.some(obj => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        setCatdOpened,
        setCartItems,
      }}
    >
      <Wrapper>
        {cartOpened && (
          <Drawer
            items={cartItems}
            onClose={() => setCatdOpened(false)}
            onRemove={onRemoveItem}
          />
        )}

        <Header onClickCart={() => setCatdOpened(true)} />

        <Routes>
          
          <Route
            index
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          />

          <Route path="/favorites" element={<Favorites />} />
            <Route path="/orders" element={<Orders />} />
            
        </Routes>

        <GlobalStyle />
      </Wrapper>
    </AppContext.Provider>
  );
}

export default App;
