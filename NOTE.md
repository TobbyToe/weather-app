# STEPS

## Step 1

### 按照责任划分组件

- App
    -- WeatherCard
        --- CurrentCity
            ---- Date
            ---- Name
            ---- Temperature
            ---- TemperatureRange
            ---- WeatherIcon
            ---- Meta
                ----- Humidity
                ----- Wind
                ----- AirQuality
                ----- Somatosensory

        --- Forecast
            ----DayOfWeek []
                ----- Name
                ----- Date
                ----- WeatherIcon
                ----- TemperatureRange
        --- SearchBar
            ---- Input
            ---- Button

        --- OtherCities
            ---- City []
                ----- WeatherIcon
                ----- Name
                ----- TemperatureRange

### 相同名字的组件： 出现重名，肯能是通用组件，可以抽出来

- WeatherIcon
- TemperatureRange
- Name
- Date