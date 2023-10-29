import React from "react";
import Temperature from "./components/Temperature";
import TemperatureRange from "../../../TemperatureRange/TemperatureRange";
import WeatherIcon from "../../../WeatherIcon/WeatherIcon";
import Meta from "./components/Meta/Meta";
import Date from "../../../Date/Date";
import Name from "../../../Name/Name";

const CurrentCity = () => {
  return (
    <div>
      ======CurrentCity======
      <Date />
      <Name />
      <Temperature />
      <TemperatureRange />
      <WeatherIcon />
      <Meta />
      ======CurrentCity======
    </div>
  );
};

export default CurrentCity;
