import React, {useRef} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Card from '../../../components/Card';
import Input from '../../../components/Input';
import {spacing, colors} from '../../../theme/main';
import textVariants from '../../../theme/textVariants';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// {
//   navigation,
// }: NativeStackScreenProps<ProductsParamList, 'NewProduct'>
const NewProduct = () => {
  const richText = useRef(null);
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
});

export default NewProduct;
