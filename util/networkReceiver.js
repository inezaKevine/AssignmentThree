import NetInfo from "@react-native-community/netinfo";

const networkReceiver = () => {
  let connected;
  NetInfo.addEventListener((state) => {
    console.log("Is connected?", state.isConnected);
    connected = state.isConnected;
  });
  return connected;
};

export default networkReceiver;
