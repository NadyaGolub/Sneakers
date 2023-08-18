import React from "react";
import Cards from "../components/Card/Card";
import axios from "axios";
import { CardContainer, Title, TitleBox } from "./Favorites.styled";


function Orders() {

  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://64d8e8a45f9bf5b879ceae8b.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Помилка");
        console.error(error);
      }
    })();
  }, []);

  return (
    <Title>
      <TitleBox>
        <h1>Мої замовлення</h1>
      </TitleBox>
      <CardContainer>
        {(isLoading ? [...Array(12)] : orders).map((item, index) => (
          <Cards key={index} loading={isLoading} {...item} />
        ))}
      </CardContainer>
    </Title>
  );
}

export default Orders;
