import React from "react";
import { Statistic } from "antd";
const { Countdown } = Statistic;

export const CountDown = ({ time = "14:00" }) => {
  
  const t = time.split(":");

  const now = new Date();

  const givenTime = parseInt(t[0] * 3600 + t[1] * 60);
  const nowTime = parseInt(now.getHours() * 3600 + now.getMinutes() * 60);

  const onChange = (val) => {
    if (4.95 * 1000 < val && val < 5 * 1000) {
      console.log("changed!");
    }
  };
  return (
    <>
      <Countdown
          value={Date.now() + (givenTime - nowTime) * 1000}
          onChange={onChange}
        />
    </>
  );
};
