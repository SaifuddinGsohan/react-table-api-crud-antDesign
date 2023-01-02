import React, { useState, useEffect } from "react";
import {  InputNumber, Select } from "antd";
const { Option } = Select;

export const DeliverPrice = () => {
  const [price, setPrice] = useState(0);
  const [time, setTime] = useState(1);
  const [deliver, setDeliver] = useState(0);

  // const onChange = (value) => {
  //   console.log('changed', value);
  // };
  // const onChangeSelect = (value) => {
  //   console.log('changed', value);
  // };

  const deliverTable = [
    {
      time: 1,
      price: [
        { minPrice: 0, maxPrice: 500, deliverPrice: 20 },
        { minPrice: 500, maxPrice: 1000, deliverPrice: 40 },
        { minPrice: 1000, maxPrice: 1500, deliverPrice: 50 }
      ]
    },
    {
      time: 2,
      price: [
        { minPrice: 0, maxPrice: 500, deliverPrice: 20 },
        { minPrice: 500, maxPrice: 1000, deliverPrice: 30 },
        { minPrice: 1000, maxPrice: 1500, deliverPrice: 40 }
      ]
    },
    {
      time: 3,
      price: [
        { minPrice: 0, maxPrice: 500, deliverPrice: 30 },
        { minPrice: 500, maxPrice: 1000, deliverPrice: 50 },
        { minPrice: 1000, maxPrice: 1500, deliverPrice: 50 }
      ]
    }
  ];
  useEffect(() => {
    setDeliver( deliverTable?.find((s) => s.time === time).price.find((p) => p.minPrice <= price && p.maxPrice > price))
  }, [time , price]);

  
 console.log(deliver);
  return (
    <>
    <Select
        style={{
          width: '30%',
        }}
        defaultValue="1"
        onChange={(t)=>setTime(parseInt(t))} 
      >
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
      </Select>
      <InputNumber min={1} max={1500} defaultValue={100} onChange={(p)=>setPrice(parseInt(p))} />
      {"   -    "+ deliver.deliverPrice}
    </>
  );
};
