import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import {DefaultNavigationProps} from '../components/MainNavigation';
import Access from '../layouts/Access';
import {colors, spacing} from '../theme/main';
import textVariants from '../theme/textVariants';

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
        <Input
          placeholder="Enter your email"
          type="emailAddress"
          style={styles.input}
        />
        <Input
          placeholder="Enter your password"
          type="password"
          style={styles.input}
        />
        <Button
          style={styles.btn}
          borderColor={colors.primary.default}
          borderRadius={0.625 * spacing.s}
          textVariant={textVariants.button.large}
          textColor={colors.white}>
          Login
        </Button>
      </View>
    </Access>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: spacing.m,
  },
  btn: {
    backgroundColor: colors.primary.default,
    marginTop: spacing.s,
  },
});

export default SignIn;
