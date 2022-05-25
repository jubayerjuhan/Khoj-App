import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from 'react-native';
import AppText from './App/AppText.js';

const PickerComponent = ({ title, data, onChange, selectedListing }) => {
  const [selectedValue, setSelectedValue] = React.useState(data[0].value);

  return (
    <View>
      <AppText style={styles.text}>{title}</AppText>
      <View style={styles.container}>
        <Picker
          selectedValue={selectedListing}
          style={styles.picker}
          onValueChange={onChange}
        >
          {data.map((item, index) => (
            <Picker.Item label={item.name} value={item.value} key={index} />
          ))}
        </Picker>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginBottom: 10,
    backgroundColor: '#F1F1F1',
    borderRadius: 6,
    paddingHorizontal: 6,
  },
  text: {
    color: "#6F7482",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 32,
    // marginBottom: 10,
    /* identical to box height, or 24px */
    letterSpacing: 0.01,
  }
});

export default PickerComponent;