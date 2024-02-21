import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log("Data saved successfully");
  } catch (e) {
    console.log("Error saving data:", e);
  }
};

export const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log("Retrieved value:", value);
    }
  } catch (e) {
    console.log("Error retrieving data:", e);
  }
};
