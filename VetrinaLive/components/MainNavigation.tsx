import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Access from '../layouts/Access';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';

const Stack = createNativeStackNavigator();

const screens = [
  {
    name: 'Sign up',
    component: ({navigation}) => (
      <Access link="Sign in now" url="Sign in" navigation={navigation}>
        <SignUp />
      </Access>
    ),
  },
  {
    name: 'Sign in',
    component: ({navigation}) => (
      <Access link="Sign in now" url="Sign up" navigation={navigation}>
        <SignIn />
      </Access>
    ),
  },
];

class MainNavigation extends React.PureComponent {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {screens.map(({name, component}) => (
          <Stack.Screen name={name} component={component} />
        ))}
      </Stack.Navigator>
    );
  }
}

export default MainNavigation;
