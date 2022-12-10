import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {IRootState} from '../../redux/rootReducer';
const Dashboard = () => {
  const {name} = useSelector((state: IRootState) => state.user);

  return <Text>Dashboard, {name}</Text>;
};

export default Dashboard;
