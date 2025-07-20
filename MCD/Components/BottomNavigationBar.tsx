import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { getWidth, getHeight, screenWidth } from '../utils/utils';

type CustomBottomBarProps = {
  LeftButtons: React.ReactNode;
  RightButtons: React.ReactNode;
  onCenterPress?: () => void; // 🔁 Pass this from parent to handle FAB navigation
};

export default function CustomBottomBar({
  LeftButtons,
  RightButtons,
  onCenterPress,
}: CustomBottomBarProps) {
  return (
      <View style={styles.container}>
        {/* Left Side Buttons */}
        <View style={styles.sideContainer}>{LeftButtons}</View>

        {/* Center Floating Button */}
        <View style={styles.centerButtonWrapper}>
          <View style={styles.outerCircle}>
            <TouchableOpacity style={styles.centerButton} onPress={onCenterPress}>
              <Image
                source={require('../assets/static/Vector.png')}
                style={styles.centerImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Right Side Buttons */}
        <View style={styles.sideContainer}>{RightButtons}</View>
      </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: getHeight(70),
    paddingHorizontal: getWidth(20),
    borderTopWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    backgroundColor: 'red',
  },
  sideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerButtonWrapper: {
    position: 'absolute',
    top: -getHeight(40),
    left: screenWidth() * 0.5,
    transform: [{ translateX: -getWidth(37.5) }],
  },
  outerCircle: {
    width: getWidth(85),
    height: getWidth(85),
    borderRadius: getWidth(85) / 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButton: {
    width: getWidth(75),
    height: getWidth(75),
    borderRadius: getWidth(75) / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    borderColor: 'black',
    borderWidth: 1,
  },
  centerImage: {
    width: getWidth(35),
    height: getWidth(35),
  },
});
