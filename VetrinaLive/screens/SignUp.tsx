import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DefaultNavigationProps} from '../components/MainNavigation';
import Access from '../layouts/Access';
import Input from '../components/Input';
import {spacing} from '../theme/main';

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
        <Input placeholder="Name and Surname" style={styles.input} />
        <Input placeholder="Email" style={styles.input} />
        <Input placeholder="Password" />
      </View>
    </Access>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: spacing.m,
  },
});

export default SignUp;
