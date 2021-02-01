import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Alert, AsyncStorage } from "react-native";
import { Loader, Weather } from "./src/components";
import * as Location from "expo-location";
import axios from "axios";
const API_KEY = "";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [temperature, setTemperature] = useState(0);
  const [condition, setCondition] = useState("Clear");

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    setIsLoading(false);
    setTemperature(Math.round(temp));
    setCondition(weather[0].main);
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // send lat,long to API => get weather
      getWeather(latitude, longitude);
    } catch {
      Alert.alert("Can't find you.", "So sad");
    }
  };

  useEffect(() => {
    console.log("=======================");
    getLocation();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <Weather temp={temperature} condition={condition}></Weather>
  );
}
