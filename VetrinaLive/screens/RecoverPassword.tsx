import React, {useReducer, useState} from 'react';
import Access from '../layouts/Access';
import Input from '../components/Input';
import {colors, spacing} from '../theme/main';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DefaultNavigationProps} from '../components/MainNavigation';
import textVariants from '../theme/textVariants';
import Button from '../components/Button';
import Alert, {AlertType} from '../components/Alert';

type RecoverPasswordProps = NativeStackScreenProps<
  DefaultNavigationProps<'RecoverPassword'>
>;

interface State {
  email: string;
}

interface Action {
  payload: string;
  type: 'setEmail';
}

type Reducer = (prevState: State, action: Action) => State;

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'setEmail':
      return {...state, email: action.payload};
    default:
      return state;
  }
};

function RecoverPassword({navigation}: RecoverPasswordProps) {
  const [formData, dispatch] = useReducer<Reducer>(reducer, {
    email: '',
  });
  const [validInputs, setValidInputs] = useState({
    email: false,
  });
  const [dirty, setDirty] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: AlertType.error,
  });

  const handleSubmit = () => {
    const validForm = Object.values(validInputs).every(input => input);
    setDirty(true);
    setAlert({...alert, show: false});
    if (validForm) {
      setAlert({
        show: true,
        type: AlertType.success,
        message: `Success! An email has been sent to ${formData.email}.\nPlease check your inbox and follow the instructions.`,
      });
    }
  };

  return (
    <Access
      link="Sign in now"
      screen="SignIn"
      navigation={navigation}
      header="Forgot Password"
      content="Enter your email and you will receive an email to recover your password">
      <View>
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

        <Button
          onPress={handleSubmit}
          style={styles.btn}
          borderColor={colors.primary.default}
          borderRadius={0.625 * spacing.s}
          textVariant={textVariants.button.large}
          textColor={colors.white}>
          Reset
        </Button>

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

export default RecoverPassword;
