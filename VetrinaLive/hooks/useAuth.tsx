import {useCallback, useEffect} from 'react';
import {User} from '../redux/user/userReducer';
import {userKey} from '../assets/storageKeys';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUser, removeUser, setAuth, removeAuth} from '../redux/index';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '../redux/rootReducer';

const useAuth = () => {
  const isAuth = useSelector((state: IRootState) => state.auth);
  const dispatch = useDispatch();

  const authenticate = useCallback(async () => {
    const user = await AsyncStorage.getItem(userKey);
    if (user) {
      dispatch(setUser(JSON.parse(user) as User));
      dispatch(setAuth());
    } else {
      dispatch(removeUser());
      dispatch(removeAuth());
    }
  }, [dispatch]);

  const signIn = (user: User) => {
    (async () => await AsyncStorage.setItem(userKey, JSON.stringify(user)))();
    authenticate();
  };

  const signOut = () => {
    (async () => await AsyncStorage.removeItem(userKey))();
    authenticate();
  };

  useEffect(() => {
    authenticate();
  }, [authenticate]);

  return {isAuth, signIn, signOut};
};

export default useAuth;
