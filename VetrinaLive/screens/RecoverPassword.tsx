import React from 'react';
import Access from '../layouts/Access';
import Input from '../components/Input';
import {colors, spacing} from '../theme/main';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DefaultNavigationProps} from '../components/MainNavigation';
import textVariants from '../theme/textVariants';
import Button from '../components/Button';

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
        <Input type="password" placeholder="Email" style={styles.input} />
        <Button
          style={styles.btn}
          borderColor={colors.primary.default}
          borderRadius={0.625 * spacing.s}
          textVariant={textVariants.button.large}
          textColor={colors.white}>
          Recover
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

export default RecoverPassword;
