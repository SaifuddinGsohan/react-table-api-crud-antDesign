import React, { useState } from "react";
import { Statistic } from "antd";
const { Countdown } = Statistic;

export const CountDown = ({
  time = "14:00",
  color = "#000",
  finishColor = "#f00",
}) => {
  const [finish, setFinish] = useState(false);

  const t = time.split(":");
  const now = new Date();

  const givenTime = parseInt(t[0] * 3600 + t[1] * 60);
  const nowTime = parseInt(now.getHours() * 3600 + now.getMinutes() * 60);

  const count = givenTime - nowTime;
  const onChange = (val) => {
    if (4.95 * 1000 < val && val < 5 * 1000) {
      console.log("changed!");
    }
  };

  const onFinish = () => {
    setFinish(true);
  };

  return (
    <>
      <Countdown
        value={Date.now() + count * 1000}
        onChange={onChange}
        onFinish={onFinish}
        valueStyle={{
          color: finish ? finishColor : color,
        }}
      />
    </>
  );
};
