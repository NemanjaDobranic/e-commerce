import React from 'react';
import {View, Text, StyleSheet, Dimensions, Linking} from 'react-native';
import Logo from '../assets/images/logo.svg';
import Facebook from '../assets/images/facebook.svg';
import Google from '../assets/images/google.svg';
import {facebookSignupUrl, googleSignupUrl} from '../assets/urls';
import {colors, spacing} from '../theme/main';
import Divider from '../components/Divider';
import Button from '../components/Button';
import textVariants from '../theme/textVariants';

const {height} = Dimensions.get('screen');

const Access = () => {
  const navigateToFacebook = () => {
    Linking.openURL(facebookSignupUrl);
  };

  const navigateToGoogle = () => {
    Linking.openURL(googleSignupUrl);
  };

  return (
    <View style={styles.root}>
      <Logo style={styles.logo} />
      <Text style={styles.header}>Create your e-commerce</Text>
      <Text style={styles.content}>
        Prova Vetrina Live gratuitamente per 7 giorni e apri il tuo negozio
        online in pochi minuti. Nessuna carta di credito richiesta.
      </Text>
      <Text>Ovdje ide forma</Text>
      <Divider content={'OR'} marginVertical={spacing.l} />
      <Button
        style={styles.facebookBtn}
        onPress={navigateToFacebook}
        borderColor={colors.primary.default}
        borderRadius={spacing.s / 2}
        textVariant={textVariants.button.large}
        textColor={colors.primary.black}
        icon={<Facebook />}
        gap={1.25 * spacing.m}>
        Sign up with Facebook
      </Button>
      <Button
        onPress={navigateToGoogle}
        borderColor={colors.primary.default}
        borderRadius={spacing.s / 2}
        textVariant={textVariants.button.large}
        textColor={colors.primary.black}
        icon={<Google />}
        gap={1.25 * spacing.m}>
        Sign up with Google
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: spacing.m,
  },
  logo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 0.07 * height,
    marginBottom: 2 * spacing.m,
  },
  header: {
    fontFamily: 'NotoSansHK-Medium',
    fontSize: 3.5 * spacing.s,
    textAlign: 'center',
    lineHeight: 4 * spacing.s,
    color: colors.primary.black,
    marginBottom: spacing.s,
  },
  content: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 2.25 * spacing.s,
    textAlign: 'center',
    lineHeight: 3 * spacing.s,
    color: colors.grey[500],
  },
  facebookBtn: {
    marginBottom: spacing.l,
  },
});

export default Access;
