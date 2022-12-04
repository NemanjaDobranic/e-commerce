import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DefaultNavigationProps} from '../components/MainNavigation';
import Access from '../layouts/Access';
import Input from '../components/Input';
import {colors, spacing} from '../theme/main';
import textVariants from '../theme/textVariants';
import Button from '../components/Button';

type SignUpProps = NativeStackScreenProps<DefaultNavigationProps<'SignUp'>>;

function SignUp({navigation}: SignUpProps) {
  return (
    <Access
      link="Sign in now"
      screen="SignIn"
      navigation={navigation}
      header="Create your e-commerce"
      content="Prova Vetrina Live gratuitamente per 7 giorni e apri il tuo negozio online in pochi minuti. Nessuna carta di credito richiesta.">
      <View>
        <Input
          type="name"
          placeholder="Name and Surname"
          style={styles.input}
        />
        <Input type="emailAddress" placeholder="Email" style={styles.input} />
        <Input type="password" placeholder="Password" style={styles.input} />
        <Button
          style={styles.btn}
          borderColor={colors.primary.default}
          borderRadius={0.625 * spacing.s}
          textVariant={textVariants.button.large}
          textColor={colors.white}>
          Create your shop
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

export default SignUp;
