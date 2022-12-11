import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IRootState} from '../../redux/rootReducer';
import Card from '../../components/Card';
import {colors, spacing} from '../../theme/main';
import textVariants from '../../theme/textVariants';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Dashboard = () => {
  const {name} = useSelector((state: IRootState) => state.user);

  return (
    <>
      <Card
        linearGradient={[colors.primary.default, '#C2E8FA']}
        marginBottom={0}
        marginEnd={0}
        marginStart={0}
        marginTop={0}
        height={6 * spacing.xl}>
        <Text style={{...textVariants.title.title1, color: colors.white}}>
          Welcome {name}!
        </Text>
        <View style={styles.storeLink}>
          <Text
            style={{
              ...textVariants.title.title5,
              color: colors.white,
              marginRight: 1.25 * spacing.m,
            }}>
            app.vetrinalive.com/{name?.toLocaleLowerCase()}-store
          </Text>
          <FeatherIcon
            name="external-link"
            color={colors.white}
            size={spacing.l}
          />
        </View>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  storeLink: {
    marginTop: 1.125 * spacing.m,
    marginLeft: 1.125 * spacing.m,
    flexDirection: 'row',
    alignContent: 'center',
  },
});

export default Dashboard;
