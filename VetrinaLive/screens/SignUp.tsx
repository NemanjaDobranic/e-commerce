import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useReducer} from 'react';
import {StyleSheet, View} from 'react-native';
import {DefaultNavigationProps} from '../components/MainNavigation';
import Access from '../layouts/Access';
import Input from '../components/Input';
import {colors, spacing} from '../theme/main';
import textVariants from '../theme/textVariants';
import Button from '../components/Button';

type SignUpProps = NativeStackScreenProps<DefaultNavigationProps<'SignUp'>>;

interface State {
  nameAndSurname: string;
  email: string;
  password: string;
}

interface Action {
  payload: string;
  type: 'setNameAndSurname' | 'setEmail' | 'setPassword';
}

type Reducer = (prevState: State, action: Action) => State;

function SignUp({navigation}: SignUpProps) {
  const reducer: Reducer = (state, action) => {
    console.log('state', state);
    switch (action.type) {
      case 'setNameAndSurname':
        return {...state, nameAndSurname: action.payload};
      case 'setEmail':
        return {...state, email: action.payload};
      case 'setPassword':
        return {...state, password: action.payload};
      default:
        return state;
    }
  };

  const [formData, dispatch] = useReducer<Reducer>(reducer, {
    email: '',
    nameAndSurname: '',
    password: '',
  });

  useEffect(() => {});
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
          value={formData.nameAndSurname}
          onChange={({nativeEvent}) =>
            dispatch({payload: nativeEvent.text, type: 'setNameAndSurname'})
          }
        />
        <Input
          type="emailAddress"
          placeholder="Email"
          style={styles.input}
          value={formData.email}
          onChange={({nativeEvent}) =>
            dispatch({payload: nativeEvent.text, type: 'setEmail'})
          }
        />
        <Input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={formData.password}
          onChange={({nativeEvent}) =>
            dispatch({payload: nativeEvent.text, type: 'setPassword'})
          }
        />
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
