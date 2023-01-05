import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {Text, View} from 'react-native';
import Alert, {AlertType} from '../components/Alert';
import {colors} from '../theme/main';

describe('<Alert>', () => {
  it('renders the correct text', () => {
    const message = 'Your password has been reset successfully';
    const message1 = 'An error occured!';
    const instance = renderer.create(
      <Alert message={message} type={AlertType.success} />,
    );

    const textInst = instance.root.findAllByType(Text)[1];
    expect(textInst.props.children).toBe(message);
    instance.update(<Alert message={message1} type={AlertType.error} />);
    expect(textInst.props.children).toBe(message1);
  });

  it('renders the correct colors', () => {
    const instance = renderer.create(
      <Alert message="Success!" type={AlertType.success} />,
    );

    let viewInst = instance.root.findByType(View);
    let textInst = instance.root.findAllByType(Text)[1];
    let bgColor = viewInst.props.style.backgroundColor as string;
    let textColor = textInst.props.style.color as string;

    expect(bgColor).toBe(colors.green.light);
    expect(textColor).toBe(colors.green.primary);

    instance.update(<Alert message="Error!" type={AlertType.error} />);
    viewInst = instance.root.findByType(View);
    textInst = instance.root.findAllByType(Text)[1];
    bgColor = viewInst.props.style.backgroundColor as string;
    textColor = textInst.props.style.color as string;
    expect(bgColor).toBe(colors.coral);
    expect(textColor).toBe(colors.strawberry);
  });
});
