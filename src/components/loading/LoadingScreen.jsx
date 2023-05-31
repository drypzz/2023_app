/**
 * LoadingScreen.jsx
 * @author @drypzz
*/

import { Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import styles from '../../utils/globals';

/**
 * LoadingScreen.jsx
 * @since 30-05-2023
 * @version 1.0.0
 * @author @drypzz
 * @description Page that will be shown before the home screen
 * @returns {JSX.Element} LoadingScreen
*/
const LoadingScreen = ( {size, color, title} ) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      <Text>{title}</Text>
    </View>
  );
};

/**
 * @author @drypzz
 * @exports LoadingScreen
 * @description Exporting the LoadingScreen component
*/
export default LoadingScreen;