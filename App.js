import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';

export default function App() {

  const promptAuthorizationCode = async () => {
    let code = '';
    // In-app browsing:
    try {
      console.log('InAppBrowser is actually an object! ', InAppBrowser);
      if (await InAppBrowser.isAvailable()) {
        console.log('Never reaches this code due to [TypeError: Cannot read property \'isAvailable\' of null]');
        const result = await InAppBrowser.openAuth(
          'www.example.com',
          `https://some.auth-api.com/void/callback`
        );
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Authentication failed!', error);
    } finally {
      return code;
    }
  }


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Open inapp browser" onPress={promptAuthorizationCode} />
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
