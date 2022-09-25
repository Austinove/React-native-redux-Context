import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import ShowScreen from './src/screens/showScreen';
import CreateScreen from './src/screens/CreateScreen';
import {Provider} from './src/context/BlogContext';

//for many context files imports you use a reference e.g
//import { Provider as BlogProvider } from '../context/BlogContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Test App',
            headerStyle: {
              backgroundColor: '#d8d8d8', //Set Header color
            },
            headerTintColor: 'black', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerRight: () => <MaterialCommunityIcons name="plus" size={30} />,
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ShowScreen" component={ShowScreen} />
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
