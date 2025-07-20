import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import { getHeight, getWidth } from '../utils/utils';
import { FontStyles } from '../utils/fonts';

type UserOrAgentFlowProps = {
  imageSource: ImageSourcePropType;
  label?: string;
  onPress?: () => void;
};

export default function UserOrAgentFlow({
  imageSource,
  label = 'Sample Text',
  onPress,
}: UserOrAgentFlowProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.redContainer}>
      <View style={styles.whiteContainer}>
        <View style={styles.contentRow}>
          <Image
            source={imageSource}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={FontStyles.Regular_22_Red}>{label}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  redContainer: {
    backgroundColor: 'red',
    width: '100%',
    paddingLeft: getWidth(4),
    maxWidth: '70%',
    marginBottom: 30,
    borderRadius: getWidth(12),
    height: getWidth(70),
  },
  whiteContainer: {
    backgroundColor: 'white',
    borderRadius: getWidth(12),
    paddingHorizontal: getWidth(16),
    paddingVertical: getHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: getWidth(32),
    height: getWidth(32),
    marginRight: getWidth(8),
  },
});
