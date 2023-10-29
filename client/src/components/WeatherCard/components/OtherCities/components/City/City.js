import React from "react";
import WeatherIcon from "../../../../../WeatherIcon/WeatherIcon";
import Name from "../../../../../Name/Name";
import TemperatureRange from "../../../../../TemperatureRange/TemperatureRange";

const City = () => {
  return (
    <div>
      <WeatherIcon />
      <Name />
      <TemperatureRange />
    </div>
  );
};

export default City;
