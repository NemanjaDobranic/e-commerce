import validateInput from '../helpers/validateInput';

describe('validate input tests', () => {
  it('empty input will return required string', () => {
    expect(validateInput('', 'telephoneNumber')).toBe(
      'This field is required!',
    );
  });

  it('return error message for invalid email ', () => {
    expect(validateInput('john.com', 'emailAddress')).toBeTruthy();
    expect(validateInput('john@mail.com', 'emailAddress')).toBeFalsy();
  });

  it('name input can only contain letters', () => {
    expect(validateInput('john123', 'name')).toBeTruthy();
    expect(validateInput('Jasmine', 'name')).toBeFalsy();
  });
});
