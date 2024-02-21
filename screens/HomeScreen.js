import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Network from "expo-network";
import { retrieveData, saveData } from "../util/sharedPrefs";
import networkReceiver from "../util/networkReceiver";
import { signInWithGoogle } from "../util/googleAuth";

const HomeScreen = () => {
  const [isConnected, setIsConnected] = useState(false);
  const checkConnection = async () => {
    const netStatus = await Network.getNetworkStateAsync();
    setIsConnected(netStatus.isConnected);
  };
  useEffect(() => {
    saveData("key", "value");
    retrieveData("key");
    // setIsConnected(networkReceiver());
    // signInWithGoogle();
  }, []);

  console.info(isConnected);
  checkConnection();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello, welcome to my App! {"\n"}
        My name is Kevine and I am happy to have you.
      </Text>
      <Text style={isConnected ? styles.connected : styles.notconnected}>
        {isConnected ? "I'm connected" : "Not connected"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    color: "#333",
  },
  notconnected: {
    fontSize: 24,
    textAlign: "center",
    color: "#ed4040",
  },
  connected: {
    fontSize: 24,
    textAlign: "center",
    color: "#2bf20c",
  },
});

export default HomeScreen;
