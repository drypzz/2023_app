/**
 * HomeScreen.jsx
 * @author @drypzz
*/

import { Text, View } from 'react-native';

import styles from '../utils/globals';

/**
 * HomeScreen.jsx
 * @since 30-05-2023
 * @version 1.0.0
 * @author @drypzz
 * @description Page that will be shown after the loading screen
 * @returns {JSX.Element} HomeScreen
*/
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
};

/**
 * @author @drypzz
 * @exports HomeScreen
 * @description Exporting the HomeScreen component
*/
export default HomeScreen;