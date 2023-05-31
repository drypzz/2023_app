/**
 * initScreen.jsx
 * @author @function404 @drypzz
*/

import * as React from 'react';
import { View, Text, } from 'react-native';

import styles from '../utils/globals';

/**
 * initScreen.jsx
 * @since 31-05-2023
 * @version 1.0.0
 * @author @function @drypzz
 * @description Page that will be displayed after login
 * @returns {JSX.Element} initScreen
*/
const initScreen = ( {navigation} )  => {
    return (
        <View style={styles.container}>
            <Text>initScreen</Text>
        </View>
    );
}

export default initScreen;