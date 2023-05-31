import HomeScreen from './components/HomeScreen';
import initScreen from './screens/initScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}} />
                <Stack.Screen name='InitScreen' component={initScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};