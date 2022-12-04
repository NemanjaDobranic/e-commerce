import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import {DefaultNavigationProps} from '../components/MainNavigation';

type SignUpProps = NativeStackScreenProps<DefaultNavigationProps<'SignUp'>>;

function SignUp({navigation}: SignUpProps) {
  return (
    <View>
      <Text>Signup</Text>
    </View>
  );
}

export default SignUp;
