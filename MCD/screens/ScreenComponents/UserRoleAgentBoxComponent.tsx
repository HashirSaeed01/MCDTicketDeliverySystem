import React, { ReactNode, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { FontStyles } from '../../utils/fonts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileHeader from '../../Components/AppTopBar';
import ScreenWrapper from '../ScreenWrapper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerParamList, RootStackParamList } from '../../utils/routes/UserFlow';
import SubmitButton from '../../Components/LoginSubmitButton';
import { getHeight, getWidth } from '../../utils/utils';

type Props = NativeStackScreenProps<DrawerParamList, 'UserRoleAgentBoxComponent'>;

const Checkbox = ({ isSelected, onPress }: { isSelected: boolean; onPress: () => void }) => (
  <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
    <View style={[styles.checkbox, isSelected && styles.checkboxSelected]} />
  </TouchableOpacity>
);

export default function UserRoleAgentBoxComponent({ route }: Props) {
  const {
    headerTitle,
    headerSubtitle,
    headerBackgroundColor = '#FFD700',
    headerIcons,
    categoryData: categories,
    noCategoryText = 'No categories available',
    pageBackgroundColor = '#fff',
    categoryHeaders,
    wrapperStyle,
  } = route.params;

  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [headerSelected, setHeaderSelected] = useState(false);

  const toggleRow = (rowIdx: number) => {
    setExpandedRows(prev =>
      prev.includes(rowIdx) ? prev.filter(i => i !== rowIdx) : [...prev, rowIdx]
    );
  };

  const toggleRowSelection = (rowIdx: number) => {
    setSelectedRows(prev =>
      prev.includes(rowIdx)
        ? prev.filter(i => i !== rowIdx)
        : [...prev, rowIdx]
    );
  };

  const toggleHeaderSelection = () => {
    setHeaderSelected(prev => !prev);
    if (!headerSelected) {
      const allRows = categories ? Array.from({ length: categories.length }, (_, i) => i) : [];
      setSelectedRows(allRows);
    } else {
      setSelectedRows([]);
    }
  };

  if (!categories || categories.length === 0 || categories.every(arr => arr.length === 0)) {
    return (
      <ScreenWrapper>
        <ProfileHeader
          name={headerTitle}
          rightContent={
            <View style={styles.headerIconsContainer}>
              {headerIcons?.map((icon, index) => (
                <TouchableOpacity key={index} onPress={()=>{}} style={styles.headerIcon}>
                  <Ionicons name={icon.name} size={24} color="#000" />
                </TouchableOpacity>
              ))}
            </View>
          }
        />
        <View style={[styles.noCategoryContainer, { backgroundColor: pageBackgroundColor }]}>
          <Text style={styles.noCategoryText}>{noCategoryText}</Text>
        </View>
      </ScreenWrapper>
    );
  }

  const maxColumns = Math.max(...categories.map(row => row.length));

  return (
    <>
      <View style={{ backgroundColor: 'red', paddingTop: 40 }} />
      <ProfileHeader
        name={headerTitle}
        rightContent={
          <View style={styles.headerIconsContainer}>
            {headerIcons?.map((icon, index) => (
              <TouchableOpacity key={index} onPress={()=>{}} style={styles.headerIcon}>
                <Ionicons name={icon.name} size={24} color="#000" />
              </TouchableOpacity>
            ))}
          </View>
        }
      />
      <View style={[styles.wrapper, wrapperStyle, { backgroundColor: 'white' }]}>
        {/* Category Header */}
        <View style={[styles.header, { backgroundColor: headerBackgroundColor, justifyContent: 'space-between' }]}>
          <Checkbox isSelected={headerSelected} onPress={toggleHeaderSelection} />
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
              style={[styles.categoryBox, { backgroundColor: pageBackgroundColor }]}
              onPress={() => toggleRow(rowIdx)}
            >


              <View style={styles.rowContent}>
                 <Icon
                  name={expandedRows.includes(rowIdx) ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                  size={24}
                  color="#000"
                />
                <Checkbox
                  isSelected={selectedRows.includes(rowIdx)}
                  onPress={() => toggleRowSelection(rowIdx)}
                />
               
                {categoryArray.map((category, colIdx) => (
                  <Text key={colIdx} style={[FontStyles.Regular_12_Black, styles.categoryText]}>
                    {category}
                  </Text>
                ))}
              </View>
            </TouchableOpacity>

            {expandedRows.includes(rowIdx) && (
              <View style={[styles.dropdownContent, { backgroundColor: pageBackgroundColor }]}>
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

           
        <View style={{position:'absolute', bottom: getHeight(120), right: getWidth(16)}}>
          <SubmitButton title={"Add new"} onPress={function (event: GestureResponderEvent): void {
                throw new Error("Function not implemented.");
              } }></SubmitButton>
        </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 12,
    marginHorizontal: 16,
    elevation: 4,
  },
  header: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    textAlign: 'left',
  },
  headerIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginLeft: 16,
  },
  categoryBox: {
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
  checkboxContainer: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 4,
    marginRight: 12,
    padding: 2,
    backgroundColor: '#fff',
  },
  checkbox: {
    width: '100%',
    height: '100%',
    borderRadius: 2,
  },
  checkboxSelected: {
    backgroundColor: '#0066FF',
  },
});
