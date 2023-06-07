/**
 * ForgotPasswordScreen.jsx
 * @author  @function404
*/

import React, { useState, useEffect } from 'react';

import { View, Image, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Animated, Keyboard } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../utils/globals';
import { Button } from 'react-native-paper';

/**
 * ForgotPasswordScreen.jsx
 * @since 7-06-2023
 * @version 1.0.0
 * @author @function404
 * @description Page that will be shown after the loading screen
 * @returns {JSX.Element} ForgotPasswordScreen
*/
const ForgotPasswordScreen = ( {navigation} ) => {

    const [email, setEmail] = useState('');


  return (
    <View>
      <View>
        <TextInput
          placeholder='Email'
          KeyboardType='email-address'
          returnKeyType='go'
          onChangeText={t => setEmail(t)}
          autoFocus={true}
        />
        <Button title='Recuperar' onPress={recover}/>
      </View>
    </View>
  );
};

/**
 * @author @funtion404 
 * @exports ForgotPasswordScreen
 * @description Exporting the ForgotPasswordScreen component
*/
export default ForgotPasswordScreen;