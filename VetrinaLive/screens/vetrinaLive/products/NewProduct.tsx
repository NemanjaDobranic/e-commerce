import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Checkbox from '@react-native-community/checkbox';
import Card from '../../../components/Card';
import Input from '../../../components/Input';
import {spacing, colors} from '../../../theme/main';
import textVariants from '../../../theme/textVariants';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Button from '../../../components/Button';
import Weight from '../../../assets/images/weight.svg';
import SelectDropdown from 'react-native-select-dropdown';
// {
//   navigation,
// }: NativeStackScreenProps<ProductsParamList, 'NewProduct'>
const NewProduct = () => {
  const richText = useRef(null);
  const [discounted, setDiscounted] = useState(false);
  const [featured, setFeatured] = useState(false);
  const categories = ['Category 1', 'Category 2', 'Category 3'];
  return (
    <ScrollView>
      <Card style={styles.cardContainer}>
        <Text style={styles.header}>General Information</Text>
        <Text style={styles.label}>Product name</Text>
        <Input
          type="name"
          placeholder="Lorem ipsum"
          value=""
          style={styles.input}
        />
        <Text style={styles.label}>Description</Text>
        <View style={styles.editorContainer}>
          <RichToolbar
            editor={richText}
            selectedIconTint={colors.primary.black}
            iconTint={colors.grey[200]}
            actions={[
              actions.setBold,
              actions.setItalic,
              actions.setStrikethrough,
              actions.setUnderline,
              actions.insertBulletsList,
              actions.insertLink,
            ]}
            iconMap={{
              [actions.setBold]: ({tintColor}) => (
                <MaterialIcon
                  name="format-bold"
                  color={tintColor}
                  size={spacing.l}
                />
              ),
              [actions.setItalic]: ({tintColor}) => (
                <MaterialIcon
                  name="format-italic"
                  color={tintColor}
                  size={spacing.l}
                />
              ),
              [actions.setStrikethrough]: ({tintColor}) => (
                <MaterialIcon
                  name="format-strikethrough"
                  color={tintColor}
                  size={spacing.l}
                />
              ),
              [actions.setUnderline]: ({tintColor}) => (
                <MaterialIcon
                  name="format-underline"
                  color={tintColor}
                  size={spacing.l}
                />
              ),
              [actions.insertBulletsList]: ({tintColor}) => (
                <MaterialIcon
                  name="format-list-bulleted"
                  color={tintColor}
                  size={spacing.l}
                />
              ),
              [actions.insertLink]: ({tintColor}) => (
                <MaterialIcon
                  name="insert-link"
                  color={tintColor}
                  size={spacing.l}
                />
              ),
            }}
            style={styles.richTextToolbarStyle}
            flatContainerStyle={styles.flatContainerStyle}
          />
          <RichEditor
            ref={richText} // from useRef()
            onChange={() => {}}
            placeholder="Description (0 / 5000)"
            androidHardwareAccelerationDisabled={true}
            initialHeight={250}
          />
        </View>
      </Card>
      <Card style={styles.cardContainer}>
        <Text style={styles.header}>Price</Text>
        <Text style={styles.label}>Original price</Text>
        <Button
          borderColor={colors.grey[300]}
          borderRadius={0.625 * spacing.s}
          textVariant={textVariants.input.input}
          textColor={colors.primary.black}
          gap={1.225 * spacing.s}
          style={styles.inputIcon}
          icon={
            <MaterialIcon
              name="euro-symbol"
              size={0.6 * spacing.l}
              color={colors.primary.black}
              style={styles.currency}
            />
          }>
          0
        </Button>
        <Text style={styles.label}>Discounted price</Text>
        <Button
          borderColor={colors.grey[300]}
          borderRadius={0.625 * spacing.s}
          textVariant={textVariants.input.input}
          textColor={colors.grey[300]}
          gap={1.225 * spacing.s}
          style={{...styles.inputIcon, backgroundColor: colors.grey[100]}}
          icon={
            <MaterialIcon
              name="euro-symbol"
              size={0.6 * spacing.l}
              color={colors.grey[300]}
              style={{...styles.currency, borderColor: colors.grey[300]}}
            />
          }>
          Lorem ipsum
        </Button>
        <View style={styles.priceCheckbox}>
          <Checkbox
            tintColors={{true: colors.primary.black, false: colors.grey[200]}}
            value={discounted}
            onValueChange={() => setDiscounted(!discounted)}
          />
          <Text
            style={{...textVariants.button.large, color: colors.primary.black}}>
            Activate discounted price
          </Text>
        </View>
      </Card>
      <Card style={styles.cardContainer}>
        <Text style={styles.header}>Category</Text>
        <SelectDropdown
          data={categories}
          onSelect={selectedItem => console.log(selectedItem)}
          buttonTextAfterSelection={selectedItem => selectedItem}
          rowTextForSelection={item => item}
          defaultButtonText="Select category"
          buttonStyle={styles.select}
          buttonTextStyle={styles.selectText}
          renderDropdownIcon={() => (
            <MaterialIcon
              name="keyboard-arrow-down"
              size={spacing.l}
              color={colors.grey[500]}
            />
          )}
        />
        <View style={styles.sku}>
          <Text style={styles.skuLabel}>Product code / SKU</Text>
          <FeatherIcon
            name="info"
            size={spacing.l}
            color={colors.primary.black}
          />
        </View>
        <Input
          type="name"
          placeholder="Leave empty to automatically generate"
          value=""
          style={styles.input}
        />
        <Text style={styles.label}>Weight</Text>
        <Button
          borderColor={colors.grey[300]}
          borderRadius={0.625 * spacing.s}
          textVariant={textVariants.input.input}
          textColor={colors.primary.black}
          gap={1.225 * spacing.s}
          style={styles.inputIcon}
          icon={<Weight height={spacing.l} />}>
          0 g
        </Button>
        <Text style={styles.label}>Availability</Text>
        <Button
          borderColor={colors.grey[300]}
          borderRadius={0.625 * spacing.s}
          textVariant={textVariants.input.input}
          textColor={colors.primary.black}
          gap={1.225 * spacing.s}
          style={styles.inputIcon}
          icon={
            <FeatherIcon
              name="box"
              size={spacing.l}
              color={colors.primary.black}
            />
          }>
          0
        </Button>
        <View style={styles.priceCheckbox}>
          <Checkbox
            tintColors={{true: colors.primary.black, false: colors.grey[200]}}
            value={featured}
            onValueChange={() => setFeatured(!discounted)}
          />
          <Text
            style={{...textVariants.button.large, color: colors.primary.black}}>
            This is a featured product
          </Text>
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {padding: spacing.l},
  header: {
    ...textVariants.title.title4,
    color: colors.primary.black,
    marginBottom: spacing.l,
  },
  label: {
    ...textVariants.form.label,
    color: colors.grey[700],
    marginBottom: spacing.s,
  },
  input: {
    marginBottom: spacing.l,
    paddingHorizontal: 1.25 * spacing.s,
    paddingVertical: 1.25 * spacing.s,
  },
  richTextToolbarStyle: {
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey[100],
    height: 1.4 * spacing.xl,
  },
  flatContainerStyle: {
    width: '100%',
    justifyContent: 'space-between',
    padding: spacing.m,
  },
  editorContainer: {
    borderWidth: 1,
    borderColor: colors.grey[400],
    borderRadius: 0.625 * spacing.s,
  },
  currency: {
    borderWidth: 1,
    borderColor: colors.primary.black,
    padding: spacing.s / 2,
    borderRadius: spacing.xl,
  },
  inputIcon: {
    marginBottom: spacing.l,
    paddingHorizontal: 1.25 * spacing.s,
    paddingVertical: 1.25 * spacing.s,
    justifyContent: 'flex-start',
  },
  priceCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  select: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 0.625 * spacing.s,
    borderColor: colors.grey[200],
    paddingVertical: spacing.m,
    paddingStart: 3.125 * spacing.s,
    paddingEnd: 2.5 * spacing.s,
    paddingHorizontal: 0,
    height: 'auto',
    minWidth: 1.8 * spacing.xl,
    width: '100%',
    marginBottom: spacing.l,
  },
  selectText: {
    color: colors.grey[500],
    ...textVariants.input.input,
    textAlign: 'left',
  },
  sku: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.s,
  },
  skuLabel: {
    ...textVariants.form.label,
    color: colors.grey[700],
  },
});

export default NewProduct;
