import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import SignUp from '../screens/access/SignUp';
import SignIn from '../screens/access/SignIn';
import RecoverPassword from '../screens/access/RecoverPassword';
import VetrinaLiveRoot from './DrawerNavigation';

export type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  RecoverPassword: undefined;
  VetrinaLiveRoot: undefined;
};

export type DefaultNavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

class MainNavigation extends React.PureComponent {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
        <Stack.Screen name="VetrinaLiveRoot" component={VetrinaLiveRoot} />
      </Stack.Navigator>
    );
  }
}

export default MainNavigation;
