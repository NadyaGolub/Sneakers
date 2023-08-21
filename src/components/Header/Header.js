import React from 'react';
import { Link } from 'react-router-dom';
import {
  Basket,
  HeaderBox,
  HeaderLeft,
  HeaderRight,
  Img,
  NameShop,
  ShopTitle,
  SvgBasket,
} from './Header.styled';

import AppContext from '../context';

function Header(props) {
  const { cartItems } = React.useContext(AppContext);

  const totalPrice = cartItems.reduce(
    (sum, obj) => Number(obj.price) + Number(sum),
    0
  );

  return (
    <HeaderBox>
      <Link to="/">
        <HeaderLeft>
          <Img width={40} height={40} src="img/logo.png" alt="" />
          <div>
            <NameShop>React Sneakers</NameShop>
            <ShopTitle>Магазин кросівок</ShopTitle>
          </div>
          
        </HeaderLeft>
      </Link>
      <HeaderRight>
        <Basket onClick={props.onClickCart}>
          <SvgBasket>
            <use href="./img/symbol-defs.svg#basket"></use>
          </SvgBasket>

          <span>{totalPrice} грн</span>
        </Basket>
        <li>
          <Link to="/favorites">
            <SvgBasket width={20} height={20}>
              <use href="./img/symbol-defs.svg#heart"></use>
            </SvgBasket>
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <svg width={20} height={20}>
              <use href="./img/symbol-defs.svg#user"></use>
            </svg>
          </Link>
        </li>
      </HeaderRight>
      
    </HeaderBox>
    
  );
}

export default Header;
