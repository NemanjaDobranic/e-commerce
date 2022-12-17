import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import SignUp from '../screens/access/SignUp';
import SignIn from '../screens/access/SignIn';
import RecoverPassword from '../screens/access/RecoverPassword';
import VetrinaLiveRoot, {VetrinaLiveList} from './VetrinaLive/VetrinaLiveRoot';
import useAuth from '../hooks/useAuth';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {colors} from '../theme/main';
import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  RecoverPassword: undefined;
  VetrinaLiveRoot: NavigatorScreenParams<VetrinaLiveList>;
};

export type DefaultNavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation: React.FC = () => {
  const {isAuth} = useAuth();

  if (isAuth === null) {
    return (
      <ActivityIndicator
        style={loading}
        color={colors.primary.default}
        size="large"
      />
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isAuth ? (
        <>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
        </>
      ) : (
        <Stack.Screen name="VetrinaLiveRoot" component={VetrinaLiveRoot} />
      )}
    </Stack.Navigator>
  );
};

const {loading} = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainNavigation;
