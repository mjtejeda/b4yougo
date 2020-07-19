import { StatusBar } from 'expo-status-bar';
import { SearchBar } from 'react-native-elements';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ayyyy here's my first edit ahaha</Text>
      <StatusBar style="auto" backgroundColor={""} />
      <SearchBar />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
