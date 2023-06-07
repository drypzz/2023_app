/**
 * LoginScreen.jsx
 * @author @drypzz @function404
*/

import React, { useState, useEffect } from 'react';

import { View, Image, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Animated, Keyboard, Linking } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../utils/globals';

/**
 * LoginScreen.jsx
 * @since 30-05-2023
 * @version 1.0.0
 * @author @drypzz @function404
 * @description Page that will be shown after the loading screen
 * @returns {JSX.Element} LoginScreen
*/
const LoginScreen = ( {navigation} ) => {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 130, y: 155}));
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 15,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 222,
      })
    ]).start();
    
  }, []);

  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x,{
        toValue: 55,
        duration: 100,
      }),
      Animated.timing(logo.y,{
        toValue: 65,
        duration: 100,
      }),
    ]).start();
  };

  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x,{
        toValue: 130,
        duration: 100,
      }),
      Animated.timing(logo.y,{
        toValue: 155,
        duration: 100,
      }),
    ]).start();
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.logo}>
        <Animated.Image style={{ width: logo.x, height: logo.y, transform: [{translateY: offset.y}] ,}} source={require('../files/images/logo.png')}/>
      </View>

      <Animated.View style={[
        styles.content,
        {
          opacity: opacity,
          transform:[
            { translateY: offset.y}
          ]
        }
        ]}>
        <TextInput
        style={styles.input}
        placeholder='CPF'
        autoCorrect={false}
        onChangeText={() => {}}
        />

        <TextInput
        style={styles.input}
        placeholder='Senha'
        autoCorrect={false}
        onChangeText={() => {}}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.sumitText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCreate}>
          <Text style={styles.createText}>Não tem uma conta?
            <Text 
              style={styles.hyperlinkStyle} 
              onPress={() => { 
                navigation.navigate('RegisterScreen');
              }}>
              Clique Aqui 
            </Text>
          </Text>
        </TouchableOpacity>
      </Animated.View>
      
    </KeyboardAvoidingView>
  );
};

/**
 * @author @drypzz 
 * @exports LoginScreen
 * @description Exporting the LoginScreen component
*/
export default LoginScreen;