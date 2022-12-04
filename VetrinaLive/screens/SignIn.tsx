import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import {DefaultNavigationProps} from '../components/MainNavigation';
import Access from '../layouts/Access';

type SignInProps = NativeStackScreenProps<DefaultNavigationProps<'SignIn'>>;

function SignIn({navigation}: SignInProps) {
  return (
    <Access link="Register now" screen="SignUp" navigation={navigation}>
      <View>
        <Text>SignIn</Text>
      </View>
    </Access>
  );
}

export default SignIn;
