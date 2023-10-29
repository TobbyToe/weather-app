import React from "react";
import WeatherIcon from "../../../../../WeatherIcon/WeatherIcon";
import TemperatureRange from "../../../../../TemperatureRange/TemperatureRange";
import Name from "../../../../../Name/Name";
import Date from "../../../../../Date/Date";

const DayOfWeek = () => {
  return (
    <div>
      ======DayOfWeek======
      <Name />
      <Date />
      <WeatherIcon />
      <TemperatureRange />
      ======DayOfWeek======
    </div>
  );
};

export default DayOfWeek;
