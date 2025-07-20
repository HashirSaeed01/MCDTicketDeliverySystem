import React, { ReactNode } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { FontStyles } from '../utils/fonts';
import { getWidth } from '../utils/utils';

type LabeledTextFieldProps = {
  label: string;
  placeholder: string;
  icon?: ReactNode;
  value?: string;
  editable?: boolean;
  onChangeText?: (text: string) => void;
};

export default function LabeledTextField({
  label,
  placeholder,
  icon,
  value,
  editable = true,
  onChangeText,
}: LabeledTextFieldProps) {
  return (
    <View style={styles.container}>
      <Text style={FontStyles.Regular_12_Black}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            !editable && styles.disabledInput
          ]}
          placeholder={placeholder}
          placeholderTextColor="grey"
          value={value}
          editable={editable}
          onChangeText={onChangeText}
        />
                {icon && <View style={styles.iconContainer}>{icon}</View>}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    marginTop: 4,
    backgroundColor: 'white',
    justifyContent:'space-between',
    paddingRight: getWidth(16)
  },
  iconContainer: {
    paddingLeft: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    fontSize: 14,
  },
  disabledInput: {
    backgroundColor: '#F5F5F5',
    color: '#666',
  },
});
