import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {IRootState} from '../../redux/rootReducer';
import Card from '../../components/Card';
import {colors, spacing} from '../../theme/main';
import textVariants from '../../theme/textVariants';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectDropdown from 'react-native-select-dropdown';
import useApi from '../../hooks/useApi';
import {news} from '../../services/vetrinaLive';
import Domain from '../../assets/images/domain.svg';

interface News {
  id: number;
  section: string;
  title: string;
  duration: number;
  image: string;
}

const Dashboard = () => {
  const {name} = useSelector((state: IRootState) => state.user);
  const [{response}] = useApi(news(), true);
  const [newsData, setNewsData] = useState<News[]>();
  const timePeriod = ['This week', 'This month', 'This year'];

  React.useEffect(() => {
    if (response) {
      setNewsData(response);
    }
  }, [response]);

  return (
    <ScrollView>
      <Card
        linearGradient={[colors.primary.default, '#C2E8FA']}
        marginBottom={0}
        marginEnd={0}
        marginStart={0}
        marginTop={0}
        height={6 * spacing.xl}>
        <Text style={styles.welcome}>Welcome {name}!</Text>
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
      <Card elevation={4} height="auto" style={styles.cardBody}>
        <View style={styles.cardHeader}>
          <FeatherIcon
            name="tool"
            size={spacing.l}
            color={colors.primary.black}
          />
          <Text style={styles.cardHeaderText}>Configura la tua vetrina</Text>
        </View>
        <View style={styles.configContent1}>
          <Text style={styles.configValue}>0%</Text>
          <Text style={styles.configStatus}>completato</Text>
        </View>
        <Text style={styles.configContent2}>
          Completa tutti i step per ricevere maggiore visibilità e una vetrina
          accattivante
        </Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardFooterText}>Completa la configurazione!</Text>
          <FeatherIcon
            name="arrow-right"
            size={spacing.l}
            color={colors.primary.default}
          />
        </View>
      </Card>
      <Card elevation={4} height="auto" style={styles.cardBody}>
        <View style={styles.cardHeader}>
          <FeatherIcon
            name="eye"
            size={spacing.l}
            color={colors.primary.black}
          />
          <Text style={styles.cardHeaderText}>Visitors</Text>
          <SelectDropdown
            data={timePeriod}
            onSelect={selectedItem => console.log(selectedItem)}
            buttonTextAfterSelection={selectedItem => selectedItem}
            rowTextForSelection={item => item}
            defaultValue={timePeriod[1]}
            buttonStyle={styles.selectPeriod}
            buttonTextStyle={styles.selectPeriodText}
            rowTextStyle={styles.selectPeriodText}
            renderDropdownIcon={() => (
              <MaterialIcon
                name="keyboard-arrow-down"
                size={spacing.l}
                color={colors.grey[500]}
              />
            )}
          />
        </View>
        <Text style={styles.visitorsValue}>0</Text>
        <View style={styles.visitorsFooter}>
          <Text style={styles.cardFooterText}>
            Vuoi ricevere più visite? Contattaci!
          </Text>
          <FeatherIcon
            name="arrow-right"
            size={spacing.l}
            color={colors.primary.default}
          />
        </View>
      </Card>
      <Card elevation={4} height="auto" style={styles.cardBody}>
        <View style={styles.cardHeader}>
          <FeatherIcon
            name="list"
            size={1.05 * spacing.l}
            color={colors.primary.black}
          />
          <Text style={styles.cardHeaderText}>Orders</Text>
          <SelectDropdown
            data={timePeriod}
            onSelect={selectedItem => console.log(selectedItem)}
            buttonTextAfterSelection={selectedItem => selectedItem}
            rowTextForSelection={item => item}
            defaultValue={timePeriod[1]}
            buttonStyle={styles.selectPeriod}
            buttonTextStyle={styles.selectPeriodText}
            rowTextStyle={styles.selectPeriodText}
            renderDropdownIcon={() => (
              <MaterialIcon
                name="keyboard-arrow-down"
                size={spacing.l}
                color={colors.grey[500]}
              />
            )}
          />
        </View>
        <View style={styles.ordersTable}>
          <View style={styles.ordersRow}>
            <Text style={styles.ordersTerm}>Orders received:</Text>
            <Text style={styles.ordersDef}>0</Text>
          </View>
          <View style={styles.ordersRow}>
            <Text style={styles.ordersTerm}>Earnings:</Text>
            <Text style={styles.ordersDef}>€ 0,00</Text>
          </View>
        </View>
        <View style={styles.ordersFooter}>
          <Text style={styles.ordersFooterText}>
            10 free tips to increase your sales
          </Text>
          <FeatherIcon
            name="arrow-right"
            size={spacing.l}
            color={colors.primary.default}
          />
        </View>
      </Card>
      <Card elevation={4} height="auto" style={styles.cardBody}>
        <View style={styles.newsHeader}>
          <FeatherIcon
            name="file-text"
            size={spacing.l}
            color={colors.primary.black}
          />
          <Text style={styles.cardHeaderText}>Lastest news</Text>
        </View>
        {newsData &&
          newsData.map(article => (
            <Card
              elevation={4}
              key={article.id}
              style={styles.newsArticle}
              marginStart={0}
              marginEnd={0}>
              <Image
                resizeMode="cover"
                source={{uri: article.image}}
                style={styles.newsArticleImg}
              />
              <View style={styles.newsArticleContainer}>
                <Text style={styles.newsArticleSection}>{article.section}</Text>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={styles.newsArticleTitle}>
                  {article.title}
                </Text>
                <Text style={styles.newsArticleDuration}>
                  Stima lettura: {article.duration / 60} min
                </Text>
              </View>
            </Card>
          ))}
        <View style={styles.cardFooter}>
          <Text style={styles.cardFooterText}>Visita il nostro Blog</Text>
          <FeatherIcon
            name="external-link"
            size={spacing.l}
            color={colors.primary.default}
          />
        </View>
      </Card>
      <Card elevation={4} style={styles.cardBody}>
        <View style={styles.cardHeader}>
          <MaterialCommunityIcon
            name="view-grid-plus-outline"
            size={spacing.l}
            color={colors.primary.black}
            style={{transform: [{rotateX: '180deg'}]}}
          />
          <Text style={styles.cardHeaderText}>Extensions Marketplace</Text>
        </View>
        <ScrollView horizontal style={styles.extensions}>
          <View>
            <Card
              marginStart={0}
              backgroundColor={colors.atomicTangerine}
              style={styles.extensionCard}>
              <Domain />
            </Card>
            <Text style={styles.extensionFooter}>Custom Domain</Text>
          </View>

          <View>
            <Card
              marginStart={0}
              backgroundColor={colors.green.primary}
              style={styles.extensionCard}>
              <Text style={styles.extensionTitle}>+50</Text>
              <Text style={styles.extensionContent}>Prodotti</Text>
            </Card>
            <Text style={styles.extensionFooter}>+ 50 Products</Text>
          </View>
        </ScrollView>

        <View style={styles.ordersFooter}>
          <Text style={styles.extensionsText}>Discover all extensions</Text>
          <FeatherIcon
            name="arrow-right"
            size={spacing.l}
            color={colors.primary.default}
          />
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  welcome: {
    ...textVariants.title.title1,
    color: colors.white,
    marginLeft: spacing.m,
    marginTop: 2 * spacing.m,
  },
  storeLink: {
    marginTop: 1.125 * spacing.m,
    marginLeft: 1.125 * spacing.m,
    flexDirection: 'row',
    alignContent: 'center',
  },
  cardBody: {
    paddingHorizontal: 1.125 * spacing.l,
    paddingVertical: spacing.l,
  },
  cardHeader: {
    flexDirection: 'row',
  },
  cardHeaderText: {
    ...textVariants.title.title3,
    color: colors.primary.black,
    marginLeft: spacing.l,
  },
  configContent1: {
    marginVertical: spacing.l,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
  configValue: {
    color: colors.strawberry,
    ...textVariants.title.title4,
    fontSize: spacing.xl,
    lineHeight: spacing.xl,
  },
  configStatus: {
    color: colors.strawberry,
    ...textVariants.title.title4,
  },
  configContent2: {
    ...textVariants.paragraph.large,
    textAlign: 'center',
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1.625 * spacing.m,
  },
  cardFooterText: {
    color: colors.primary.default,
    ...textVariants.link.regular,
    textDecorationLine: 'underline',
    marginRight: 1.25 * spacing.l,
  },
  selectPeriod: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    height: 'auto',
    minWidth: 1.8 * spacing.xl,
    width: 'auto',
    marginLeft: 'auto',
  },
  selectPeriodText: {
    color: colors.grey[500],
    ...textVariants.paragraph.tiny,
  },
  visitorsValue: {
    ...textVariants.title.title1,
    color: colors.primary.black,
    textAlign: 'center',
    fontSize: 1.05 * spacing.xl,
    marginVertical: spacing.l,
    lineHeight: spacing.xl,
  },
  visitorsFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ordersTable: {
    marginVertical: 1.125 * spacing.l,
  },
  ordersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.s,
  },
  ordersTerm: {
    ...textVariants.title.title4,
    color: colors.grey[400],
  },
  ordersDef: {
    ...textVariants.title.title3,
    color: colors.primary.black,
  },
  ordersFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ordersFooterText: {
    ...textVariants.title.title5,
    color: colors.primary.default,
  },
  newsHeader: {flexDirection: 'row', marginBottom: spacing.m},
  newsArticle: {flexDirection: 'row', flexWrap: 'nowrap'},
  newsArticleImg: {
    width: 2.25 * spacing.xl,
    height: '100%',
    borderTopLeftRadius: 1.25 * spacing.s,
    borderBottomLeftRadius: 1.25 * spacing.s,
  },
  newsArticleContainer: {
    padding: spacing.m,
  },
  newsArticleSection: {
    ...textVariants.caption.regular,
    textTransform: 'capitalize',
    color: colors.primary.default,
    marginBottom: spacing.s,
  },
  newsArticleTitle: {
    ...textVariants.title.title6,
    color: colors.primary.black,
    marginBottom: spacing.s,
    maxWidth: 4.5 * spacing.xl,
  },
  newsArticleDuration: {
    ...textVariants.button.medium,
    color: colors.grey[400],
    textDecorationLine: 'underline',
  },
  extensions: {
    marginTop: 1.375 * spacing.m,
    marginBottom: 1.375 * spacing.l,
  },
  extensionCard: {
    width: 4 * spacing.xl,
    height: 4 * spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  extensionsText: {
    ...textVariants.title.title5,
    color: colors.primary.default,
    textDecorationLine: 'underline',
  },
  extensionTitle: {
    ...textVariants.title.title1,
    color: colors.white,
  },
  extensionContent: {
    fontFamily: 'NotoSansHK-Regular',
    fontSize: 1.375 * spacing.m,
    lineHeight: 1.125 * spacing.l,
    color: colors.white,
  },
  extensionFooter: {
    ...textVariants.button.large,
    color: colors.primary.black,
    textAlign: 'left',
  },
});

export default Dashboard;
