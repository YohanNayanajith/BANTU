import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import { Login,ForgetPassword,Register,AddPost,FindCustomers,Home,Profile,Search,Payment } from './screens';
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
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AddPost" component={AddPost} />
                <Stack.Screen name="FindCustomers" component={FindCustomers} />
                <Stack.Screen name="Profile" component={Profile} />
                {/* <Stack.Screen name="Profile" component={Profile1StackScreen} /> */}
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Payment" component={Payment} />
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