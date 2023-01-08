import React, { useState } from "react";
import { Statistic } from "antd";
const { Countdown } = Statistic;
//2023-01-06
export const CountDown = ({
  time = "11:30",
  color = "#000",
  date = "2023-01-8",
  finishColor = "#f00",
}) => {
  const [finish, setFinish] = useState(false);

  const t = time.split(":");
  const d = date.split("-");
  const now = new Date();

  const givenTime = parseInt(
    d[0] * 3600 * 24 * 30 * 12 + //Year
      d[1] * 3600 * 24 * 30 + //Month
      d[2] * 3600 * 24 + //Day
      t[0] * 3600 + //Hours
      (t[1] || 0 )* 60 //Minutes
  );

  const nowTime = parseInt(
    now.getFullYear() * 3600 * 24 * 30 * 12 + //getYear
      (now.getMonth() + 1) * 3600 * 24 * 30 + //getMonth
      now.getDate() * 3600 * 24 + //getDate
      now.getHours() * 3600 + //getHours
      now.getMinutes() * 60 //getMinutes
  );

  console.log("givenTime", givenTime);
  console.log("nowTime", nowTime);

  const count = givenTime - nowTime;
  console.log("count", count);

  const onFinish = () => {
    setFinish(true);
  };

  return (
    <>
      <Countdown
        value={Date.now() + count * 1000}
        onFinish={onFinish}
        valueStyle={{
          color: finish ? finishColor : color,
        }}
      />
    </>
  );
};
