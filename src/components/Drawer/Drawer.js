import React from "react";
import Info from "../info";
import axios from "axios";
import {
  BasketGoods,
  CardDrawer,
  CartItem,
  CartItemName,
  CartItemNameBox,
  CartTotalBlock,
  GreenButton,
  Img,
  ItemDrawer,
  Items,
  Overlay,
  RemoveBtn,
} from "./Drawer.styled";
import AppContext from "../context";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [] }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [ orderId, setOrderId]  = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const totalPrice = cartItems.reduce((sum, obj) => Number(obj.price) + Number(sum), 0);
  
  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post("https://64d8e8a45f9bf5b879ceae8b.mockapi.io/orders", {
        items: cartItems
      });
      
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://64d64067754d3e0f1361d63b.mockapi.io/cart/' + item.id);
        await delay(1000);
      }

      
      
    } catch (error) {
      alert('Не вдалося створити замовлення!');
    }
    setIsLoading(false);
  };
  
  
  return (
    <Overlay>
      <CardDrawer>
        <BasketGoods>
          Кошик{" "}
          <RemoveBtn onClick={onClose}>
            <use href="img/symbol-defs.svg#delete"></use>
          </RemoveBtn>
        </BasketGoods>
        {items.length > 0 ? (
          <ItemDrawer>
            <Items>
              {items.map((obj) => (
                <CartItem key={obj.id}>
                  <Img width={70} height={70} src={obj.imageUrl} alt="" />
                  <CartItemNameBox>
                    <CartItemName>{obj.title}</CartItemName>
                    <b>{obj.price}</b>
                  </CartItemNameBox>
                  <div>
                    <RemoveBtn>
                      <use
                        onClick={() => onRemove(obj.id)}
                        href="img/symbol-defs.svg#delete"
                      ></use>
                    </RemoveBtn>
                  </div>
                </CartItem>
              ))}
            </Items>{" "}
            <CartTotalBlock>
              <ul>
                <li>
                  <span>Всього:</span>
                  <div></div>
                  <b>{totalPrice} грн</b>
                </li>
                <li>
                  <span>Податок 5%:</span>
                  <div></div>
                  <b>{totalPrice/100*5} грн</b>
                </li>
              </ul>
              <GreenButton disabled={isLoading} onClick={onClickOrder}>
                Оформити замовлення
                <svg width={16} height={14}>
                  <use href="img/symbol-defs.svg#arrow"></use>
                </svg>
              </GreenButton>
            </CartTotalBlock>
          </ItemDrawer>
        ) : (
          <Info
            title={isOrderComplete ? "Замовлення оформлене" : "Кошик пустий"}
            description={isOrderComplete ? `Ваше замовлення №${orderId} скоро буде передано кур'єрській службі доставки` : "Добавте хоча б одну пару кросівок, щоб зробити замовлення"}
            image={isOrderComplete ? "img/order.svg" : "img/empty-basket.svg"}
          />
        )}
      </CardDrawer>
    </Overlay>
  );
}

export default Drawer;
