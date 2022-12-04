import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import RecoverPassword from '../screens/RecoverPassword';

export type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  RecoverPassword: undefined;
};

export type DefaultNavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const screens = [
  {
    name: 'SignUp' as keyof RootStackParamList,
    component: SignUp,
  },
  {
    name: 'SignIn' as keyof RootStackParamList,
    component: SignIn,
  },
  {
    name: 'RecoverPassword' as keyof RootStackParamList,
    component: RecoverPassword,
  },
];

class MainNavigation extends React.PureComponent {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {screens.map(({name, component}) => (
          <Stack.Screen name={name} component={component} key={name} />
        ))}
      </Stack.Navigator>
    );
  }
}

export default MainNavigation;
