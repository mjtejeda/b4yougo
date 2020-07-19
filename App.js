import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GooglePlacesAutocomplete from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';

const GOOGLE_PLACES_API_KEY = '';
const App = () => {
  return (
      <View style={styles.container}>
        <GooglePlacesAutocomplete
            query={{
              key: GOOGLE_PLACES_API_KEY,
              language: 'en', // language of the results
            }}
            onPress={(data, details = null) => console.log(data)}
            onFail={error => console.error(error)}
            requestUrl={{
              url:
                  'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
              useOnPlatform: 'web',
            }} // this in only required for use on the web. See https://git.io/JflFv more for details.
            styles={{
              textInputContainer: {
                backgroundColor: 'rgba(0,0,0,0)',
                borderTopWidth: 0,
                borderBottomWidth: 0,
              },
              textInput: {
                marginLeft: 0,
                marginRight: 0,
                height: 38,
                color: '#5d5d5d',
                fontSize: 16,
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
            }}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

//OG code vv

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
