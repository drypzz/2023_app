import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import initScreen from './screens/initScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}} />
                <Stack.Screen name='InitScreen' component={initScreen} options={{headerShown: false}} />
                <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};