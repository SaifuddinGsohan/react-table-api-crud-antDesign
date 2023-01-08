import React, { useState } from "react";
import { Statistic, Tag } from "antd";
const { Countdown } = Statistic;
//2023-01-06
export const CountDown = ({
  time = "11:30:02",
  date = "2023-01-8",
  color = "#000",
  finishColor = "#f00",
  bColor = "purple",
  finishbColor = "gold",
  auto=false

}) => {
  const [textColor, setTextColor] = useState(color);
  const [backColor, setBackColor] = useState(bColor);

  const t = time.match("PM") || time.match("pm")
    ? time
        .split(":")
        .map((m, i) => (i == 0 ? parseInt(m) + 12 : parseInt(m)))
    : time.split(":");
  const d = date.match("-") ? date.split("-") : date.split("/");
  const now = new Date();

  console.log("t", t);

  const givenTime = 
    parseInt(d[0]) * 3600 * 24 * 30 * 12 + //Year
    parseInt(d[1]) * 3600 * 24 * 30 + //Month
    parseInt(d[2]) * 3600 * 24 + //Day
    parseInt(t[0]) * 3600 + //Hours
    parseInt((t[1])|| 0) * 60 + //Minutes
    parseInt((t[2]) || 0) //Minutes
  ;

  const nowTime = parseInt(
    now.getFullYear() * 3600 * 24 * 30 * 12 + //getYear
      (now.getMonth() + 1) * 3600 * 24 * 30 + //getMonth
      now.getDate() * 3600 * 24 + //getDate
      now.getHours() * 3600 + //getHours
      now.getMinutes() * 60 + //getMinutes
      now.getSeconds() //getMinutes
  );

  console.log("givenTime", givenTime);
  console.log("nowTime", nowTime);

  const count = givenTime - nowTime;

  console.log("count", count);

  const onFinish = () => {
    setTextColor(finishColor);
    setBackColor(finishbColor);
  };

  return (
    <>
      <Tag color={count <= 0 && auto ? finishbColor : backColor}>
        <Countdown
          value={Date.now() + count * 1000}
          onFinish={onFinish}
          valueStyle={{ color: count <= 0 && auto ? finishColor : textColor }}
        />
      </Tag>
    </>
  );
};
