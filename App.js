import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "504e4c277b7618d2c36919e9dfe4f8e4";

export default class extends React.Component {
  state = {
    isLoading: true
  };
getWeather = async(latitude, longitude) => {

}
getLocation = async() => {
  try {
    await Location.requestForegroundPermissionsAsync();
    const {
      coords : {latitude, longitude}
    } = await Location.getCurrentPositionAsync();
    this.setState({isLoading:false});
  } catch (error) {
    Alert.alert("Can't find you.", "So sad");
  }
};
componentDidMount(){
  this.getLocation();
}
render() {
  this.getWeather(lat, long)
  const {isLoading} = this.state;
  return isLoading? <Loading /> : null;
}
} 