import { Dimensions, Platform } from "react-native";

export const validateEmail = (text = "") => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(text);
};
// Retrieve initial screen's width
const screenWidth = Dimensions.get("window").width;


// Retrieve initial screen's height
const screenHeight = Dimensions.get("window").height;

export const isIphoneX = () => {
  const dimen = Dimensions.get("window");
  return (
    Platform.OS === "ios" && (dimen.height === 812 || dimen.width === 812)
  );
};

const screeniPhoneHeight = isIphoneX() ? 812 : 667;

export const hp = height => (height * screenHeight) / screeniPhoneHeight;
export const wp = width => (width * screenWidth) / 375;
