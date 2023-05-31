/**
 * HomeScreen.jsx
 * @author @drypzz
*/

import React, { useState } from 'react';

import { View, Image, KeyboardAvoidingView } from 'react-native';

import styles from '../utils/globals';

/**
 * HomeScreen.jsx
 * @since 30-05-2023
 * @version 1.0.0
 * @author @drypzz
 * @description Page that will be shown after the loading screen
 * @returns {JSX.Element} HomeScreen
*/
const HomeScreen = ( {navigation} ) => {

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Image source={require('../files/images/logo.png')}/>
      </View>
      
    </KeyboardAvoidingView>
  );
};

/**
 * @author @drypzz
 * @exports HomeScreen
 * @description Exporting the HomeScreen component
*/
export default HomeScreen;