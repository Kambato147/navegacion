import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';

export default function SettingStack() {
  return (
    <View style={styles.container}>
      <Text>SettingStack</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});