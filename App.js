import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import { Login,ForgetPassword,Register } from './screens';
import Tabs from './navigation/tabs';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={'Log'}
            >
                
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Tabs" component={Tabs} />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
                <Stack.Screen name="Register" component={Register} />
                {/* <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Event" component={Event} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Setting" component={Setting} />
                <Stack.Screen name="PetsDetail" component={PetsDetail} /> */}
            </Stack.Navigator>
        </NavigationContainer>
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