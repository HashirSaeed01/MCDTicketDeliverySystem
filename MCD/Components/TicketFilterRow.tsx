import React, { useRef } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;

interface HorizontalScrollWithArrowsProps {
  children: React.ReactNode;
}

export default function HorizontalScrollWithArrows({ children }: HorizontalScrollWithArrowsProps) {
  const scrollRef = useRef<ScrollView>(null);

  const scrollBy = (offset: number) => {
    scrollRef.current?.scrollTo({ x: offset, animated: true });
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollTo({ x: 0, animated: true });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrow} onPress={scrollLeft}>
        <Ionicons name="chevron-back" size={24} color="#333" />
      </TouchableOpacity>

      <ScrollView
        horizontal
        ref={scrollRef}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {children}
      </ScrollView>

      <TouchableOpacity style={styles.arrow} onPress={scrollRight}>
        <Ionicons name="chevron-forward" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollContainer: {
    paddingHorizontal: 8,
  },
  arrow: {
    padding: 8,
  },
});
