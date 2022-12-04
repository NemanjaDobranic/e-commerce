import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Input from '../components/Input';
import {DefaultNavigationProps} from '../components/MainNavigation';
import Access from '../layouts/Access';
import {spacing} from '../theme/main';

type SignInProps = NativeStackScreenProps<DefaultNavigationProps<'SignIn'>>;

function SignIn({navigation}: SignInProps) {
  return (
    <Access
      link="Register now"
      screen="SignUp"
      navigation={navigation}
      header="Welcome"
      content="Enter your email and password to access your account">
      <View>
        <Input placeholder="Enter your email" style={styles.input} />
        <Input placeholder="Enter your password" />
      </View>
    </Access>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: spacing.m,
  },
});

export default SignIn;
