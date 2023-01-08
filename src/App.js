import { Button, Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import { AutoComplete } from "antd";

import { getAllProducts } from "./API";
import { List } from "./component/List";
import { DeliverPrice } from "./component/DeliverPrice";
import { CountDown } from "./component/CountDown";

export const App = () => {
  //Search
  const [options, setOptions] = useState([]);
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState(true);

  const [list, setList] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.products);
    });
  }, []);

  const onSearch = () => {
    getAllProducts().then((res) => {
      setOptions(
        res?.products?.map((m) => ({ label: m.title, value: m.title }))
      );
    });
  };

  const onSelect = (data) => {
    setList((oldArray) => [
      ...oldArray,
      products
        ?.map((m) => ({
          ...m,
          quantity: 1,
          total: m.price,
          discountedPrice: Math.round(
            m.price - m.discountPercentage * (100 / m.price)
          ),
        }))
        ?.find((f) => f.title === data),
    ]);
  };

  //Table

  console.log("List - ", list);
  //

  return (
    <>
      <Row>
        <Col span={8}>
          <AutoComplete
            options={options}
            style={{
              width: 200,
            }}
            filterOption={true}
            onSelect={onSelect}
            onSearch={onSearch}
            placeholder="input here"
          />
          <Button onClick={() => setCard(!card)} type="primary">
            Curd
          </Button>
        </Col>

        <Col span={16}>
          {/* {card ? <List data={list} /> : <></>} */}
          {list?.length > 0 && <List list={list} setList={setList} />}
          {/* {list?.map((i, k) => {
            return <h2>{i.title}</h2>;
          })} */}
          <Button onClick={() => {}} type="primary">
            Checkout
          </Button>
        </Col>
        <Col span={12}>
          <DeliverPrice />
        </Col>
        <Col span={12}>
          {/* time = 6:00:00 PM (HH:MM:SS 24 || 12), date = 2023-01-06 (yyyy-mm-dd || yyyy/mm/dd), auto for color change if countDown under 0 */}
          <CountDown  time= {"4:42 PM"} date={"2023-01-08"} auto />
        </Col>
      </Row>
    </>
  );
};

export default App;
