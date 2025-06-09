import React from 'react';
import {StyleSheet} from 'react-native';
import {RootNavigator} from './src/navigation';
import {SafeAreaView} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <RootNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
  },
});

export default App;
