import React, {useReducer, useState, useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {DefaultNavigationProps} from '../../navigation/MainNavigation';
import Access from '../../layouts/Access';
import Input from '../../components/Input';
import {colors, spacing} from '../../theme/main';
import textVariants from '../../theme/textVariants';
import Button from '../../components/Button';
import useApi from '../../hooks/useApi';
import {createAccount} from '../../services/access';
import Alert, {AlertType} from '../../components/Alert';

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

const reducer: Reducer = (state, action) => {
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

function SignUp({navigation}: DefaultNavigationProps<'SignUp'>) {
  const [formData, dispatch] = useReducer<Reducer>(reducer, {
    email: '',
    nameAndSurname: '',
    password: '',
  });
  const [validInputs, setValidInputs] = useState({
    email: false,
    nameAndSurname: false,
    password: false,
  });
  const [dirty, setDirty] = useState(false);
  const [{loading, response, error}, executeApiCall] = useApi();
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: AlertType.error,
  });

  useEffect(() => {
    if (response) {
      setAlert({
        show: true,
        message: 'Success! Shop was created successfully.',
        type: AlertType.success,
      });
    }

    if (error) {
      setAlert({
        show: true,
        message:
          'Oops! Something went wrong. Make sure you are online and restart the App.',
        type: AlertType.error,
      });
    }
  }, [response, error]);

  const handleSubmit = () => {
    const validForm = Object.values(validInputs).every(input => input);
    setDirty(true);
    setAlert({...alert, show: false});
    if (validForm) {
      const names = formData.nameAndSurname.split(' ');
      executeApiCall(
        createAccount(names[0], names[1], formData.email, formData.password),
      );
    }
  };

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
          isValid={isValid =>
            setValidInputs({...validInputs, nameAndSurname: isValid})
          }
          dirty={dirty}
        />
        <Input
          type="emailAddress"
          placeholder="Email"
          style={styles.input}
          value={formData.email}
          onChange={({nativeEvent}) =>
            dispatch({payload: nativeEvent.text, type: 'setEmail'})
          }
          isValid={isValid => setValidInputs({...validInputs, email: isValid})}
          dirty={dirty}
        />
        <Input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={formData.password}
          onChange={({nativeEvent}) =>
            dispatch({payload: nativeEvent.text, type: 'setPassword'})
          }
          isValid={isValid =>
            setValidInputs({...validInputs, password: isValid})
          }
          dirty={dirty}
        />
        {!loading ? (
          !response ? (
            <Button
              onPress={handleSubmit}
              style={styles.btn}
              borderColor={colors.primary.default}
              borderRadius={0.625 * spacing.s}
              textVariant={textVariants.button.large}
              textColor={colors.white}>
              Create your shop
            </Button>
          ) : (
            <></>
          )
        ) : (
          <ActivityIndicator color={colors.primary.default} size="large" />
        )}

        {alert.show && (
          <Alert
            style={styles.alert}
            message={alert.message}
            type={alert.type}
            close={() => setAlert({...alert, show: false})}
          />
        )}
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
  alert: {
    marginTop: spacing.l,
    marginBottom: 0,
  },
});

export default SignUp;
