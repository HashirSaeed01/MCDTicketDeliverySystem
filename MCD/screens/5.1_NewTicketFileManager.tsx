import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getHeight, getWidth } from '../utils/utils';
import ProfileHeader from '../Components/AppTopBar';
import RowItem from '../Components/FileManagerRow';
import useFileSystem from '../utils/FileSystemFetchFiles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/routes/UserFlow';
import { FontStyles } from '../utils/fonts';




export default function AdminFileManager(  ) {
  const { files, error } = useFileSystem();

  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.safeArea} />
      <View style={{ height: getHeight(40), backgroundColor: 'red' }} />

      <ProfileHeader name={'File Manager'} subtitle={''} heightOverride={getHeight(70)} backgroundColorCode='#FAFAFA' />

      <View style={styles.filterRow}>
        <Text style={FontStyles.Regular_12_Black}>All Files</Text>
        <TouchableOpacity>
          <Ionicons name="filter" size={22} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
        {error ? (
          <Text style={{ color: 'red', padding: 16 }}>Error: {error}</Text>
        ) : files.length === 0 ? (
          <ActivityIndicator size="small" color="gray" style={{ marginTop: 20 }} />
        ) : (
          renderFiles(files)
        )}
      </ScrollView>
    </View>
  );
}

function renderFiles(files: any[]): React.ReactNode {
  return files.map((file, index) => (
    <View key={index} style={{ paddingLeft: file.isDirectory ? 8 : 16 }}>
      <RowItem
        iconSource={
          file.isDirectory
            ? require('../assets/static/fileicon.png')
            : require('../assets/static/fileicon.png')
        }
        title={file.name}
        subtitle={file.path}
      />
      {file.children && renderFiles(file.children)}
    </View>
  ));
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#fff' },
  safeArea: { backgroundColor: 'red' },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  filterStatus: {
    fontSize: 14,
    color: '#444',
  },
});
