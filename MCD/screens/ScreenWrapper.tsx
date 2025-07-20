import React from 'react';
import { View, StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';
import { getHeight } from '../utils/utils';

type Props = {
  children: React.ReactNode;
};

export default function ScreenWrapper({ children }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'red',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + getHeight(5) : 0,
  },
  wrapper: {
    flex: 1,
    paddingTop: getHeight(0),
    paddingBottom: getHeight(45)
  },
});
