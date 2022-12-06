import validator from 'validator';

function validateInput(
  text: string,
  type: 'name' | 'password' | 'emailAddress',
): string {
  if (validator.isEmpty(text)) {
    return 'This field is required!';
  }

  if (type === 'emailAddress' && !validator.isEmail(text)) {
    return 'Invalid email format!';
  }

  if (type === 'name') {
    if (!validator.isAlpha(text, 'it-IT', {ignore: ' '})) {
      return 'Only letters are allowed!';
    }
  }

  if (type === 'password') {
    if (text.length < 6) {
      return 'Password must contain at least 6 characters!';
    }
    if (text.length > 12) {
      return 'Password must contain less than 12 characters!';
    }
  }

  return '';
}

export default validateInput;
