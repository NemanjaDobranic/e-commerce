import React from 'react';
import Access from '../layouts/Access';
import Input from '../components/Input';
import {spacing} from '../theme/main';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DefaultNavigationProps} from '../components/MainNavigation';

type RecoverPasswordProps = NativeStackScreenProps<
  DefaultNavigationProps<'RecoverPassword'>
>;

function RecoverPassword({navigation}: RecoverPasswordProps) {
  return (
    <Access
      link="Sign in now"
      screen="SignIn"
      navigation={navigation}
      header="Forgot Password"
      content="Enter your email and you will receive an email to recover your password">
      <View>
        <Input placeholder="Email" style={styles.input} />
      </View>
    </Access>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: spacing.m,
  },
});

export default RecoverPassword;
