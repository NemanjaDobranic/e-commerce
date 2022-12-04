import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import {DefaultNavigationProps} from '../components/MainNavigation';
import Access from '../layouts/Access';

type SignUpProps = NativeStackScreenProps<DefaultNavigationProps<'SignUp'>>;

function SignUp({navigation}: SignUpProps) {
  return (
    <Access link="Sign in now" screen="SignIn" navigation={navigation}>
      <View>
        <Text>Signup</Text>
      </View>
    </Access>
  );
}

export default SignUp;
