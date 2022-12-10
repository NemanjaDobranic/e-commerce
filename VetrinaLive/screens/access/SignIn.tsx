/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useReducer, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Alert, {AlertType} from '../../components/Alert';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {DefaultNavigationProps} from '../../navigation/MainNavigation';
import useApi from '../../hooks/useApi';
import Access from '../../layouts/Access';
import {colors, spacing} from '../../theme/main';
import textVariants from '../../theme/textVariants';
import {login} from '../../services/access';
import {setUser} from '../../redux/index';
import {useDispatch} from 'react-redux';

interface State {
  email: string;
  password: string;
}

interface Action {
  payload: string;
  type: 'setEmail' | 'setPassword';
}

type Reducer = (prevState: State, action: Action) => State;

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'setEmail':
      return {...state, email: action.payload};
    case 'setPassword':
      return {...state, password: action.payload};
    default:
      return state;
  }
};

function SignIn({navigation}: DefaultNavigationProps<'SignIn'>) {
  const [formData, dispatch] = useReducer<Reducer>(reducer, {
    email: '',
    password: '',
  });
  const [validInputs, setValidInputs] = useState({
    email: false,
    password: false,
  });
  const [dirty, setDirty] = useState(false);
  const [{loading, response, error}, executeApiCall] = useApi();
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: AlertType.error,
  });
  const dispatchAction = useDispatch();

  useEffect(() => {
    if (response) {
      dispatchAction(setUser(response.user));
      navigation.navigate('VetrinaLiveRoot');
    }

    if (error) {
      setAlert({
        show: true,
        message: error.message,
        type: AlertType.error,
      });
    }
  }, [response, error]);

  const handleSubmit = () => {
    const validForm = Object.values(validInputs).every(input => input);
    setDirty(true);
    setAlert({...alert, show: false});
    if (validForm) {
      executeApiCall(login(formData.email, formData.password));
    }
  };

  return (
    <Access
      link="Register now"
      screen="SignUp"
      navigation={navigation}
      header="Welcome"
      content="Enter your email and password to access your account">
      <View>
        <Input
          type="emailAddress"
          placeholder="Enter your email"
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
          placeholder="Enter your password"
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
              Login
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

export default SignIn;
