import React, { ReactNode, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontStyles } from '../../utils/fonts';
import Icon from 'react-native-vector-icons/MaterialIcons';

type CategoryComponentBoxProps = {
  categories?: string[][]; // Each row = 1 category
  widgets?: ReactNode[];   // Widget for first item in each row
  categoryHeaders?: string[];
};

export default function CategoryComponentBox({
  categories,
  widgets,
  categoryHeaders,
}: CategoryComponentBoxProps) {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (rowIdx: number) => {
    setExpandedRows(prev => 
      prev.includes(rowIdx) 
        ? prev.filter(i => i !== rowIdx)
        : [...prev, rowIdx]
    );
  };

  if (!categories || categories.length === 0 || categories.every(arr => arr.length === 0)) {
    return (
      <View style={styles.noCategoryContainer}>
        <Text style={styles.noCategoryText}>No categories available</Text>
      </View>
    );
  }

  // Figure out the maximum category depth (column count)
  const maxColumns = Math.max(...categories.map(row => row.length));

  return (
    <View style={styles.wrapper}>
      {/* Header */}
      <View style={[styles.header, { justifyContent: 'space-between' }]}>
        {Array.from({ length: maxColumns }, (_, i) => (
          <Text key={i} style={[FontStyles.Bold_12_Black, styles.headerText]}>
            {categoryHeaders?.[i] ?? `Category ${i + 1}`}
          </Text>
        ))}
      </View>

      {/* Category Rows */}
      {categories.map((categoryArray, rowIdx) => (
        <View key={rowIdx}>
          <TouchableOpacity 
            style={styles.categoryBox}
            onPress={() => toggleRow(rowIdx)}
          >
            <View style={styles.rowContent}>
              <Icon 
                name={expandedRows.includes(rowIdx) ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} 
                size={24} 
                color="#000" 
              />
              {categoryArray.map((category, colIdx) => (
                <Text 
                  key={colIdx} 
                  style={[FontStyles.Regular_12_Black, styles.categoryText]}
                >
                  {category}
                </Text>
              ))}
              {widgets?.[rowIdx]}
            </View>
          </TouchableOpacity>

          {expandedRows.includes(rowIdx) && (
            <View style={styles.dropdownContent}>
              <View style={styles.dropdownRow}>
                <Text style={FontStyles.Regular_12_Black}>Status:</Text>
                <Text style={[FontStyles.Regular_12_Black, styles.valueText]}>Active</Text>
              </View>
              <View style={styles.dropdownRow}>
                <Text style={FontStyles.Regular_12_Black}>Created On:</Text>
                <Text style={[FontStyles.Regular_12_Black, styles.valueText]}>2024-03-20</Text>
              </View>
              <View style={styles.dropdownRow}>
                <Text style={FontStyles.Regular_12_Black}>Last Modified:</Text>
                <Text style={[FontStyles.Regular_12_Black, styles.valueText]}>2024-03-21</Text>
              </View>
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 12,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    elevation: 4,
  },
  header: {
    backgroundColor: '#FFD700',
    padding: 12,
    flexDirection: 'row',
  },
  headerText: {
    flex: 1,
    textAlign: 'left',
  },
  categoryBox: {
    backgroundColor: '#fff',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    flex: 1,
    textAlign: 'left',
  },
  dropdownContent: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dropdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  valueText: {
    marginLeft: 8,
    color: '#666',
  },
  noCategoryContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noCategoryText: {
    fontSize: 14,
    color: '#888',
  },
});
