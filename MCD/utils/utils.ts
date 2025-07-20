import { Dimensions } from 'react-native';

// ✅ Base design dimensions from Figma
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');


export const screenWidth = () => { 
  return BASE_WIDTH;
}

// 🔹 Get responsive width value
export const getWidth = (designWidth: number) => {
  return (designWidth / BASE_WIDTH) * SCREEN_WIDTH;
};

// 🔹 Get responsive height value
export const getHeight = (designHeight: number) => {
  return (designHeight / BASE_HEIGHT) * SCREEN_HEIGHT;
};

// 🔹 Get responsive padding for horizontal sides
export const getHorizontalPadding = (designPadding: number) => {
  return getWidth(designPadding);
};

// 🔹 Get responsive padding for vertical sides
export const getVerticalPadding = (designPadding: number) => {
  return getHeight(designPadding);
};



