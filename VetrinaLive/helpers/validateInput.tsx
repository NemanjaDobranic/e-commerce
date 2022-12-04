import validator from 'validator';

function validateInput(
  text: string,
  type: 'name' | 'password' | 'emailAddress',
): string {
  if (validator.isEmpty(text)) {
    return 'This field is required!';
  }

  switch (type) {
    case 'name':
      return 'This field is required!';
    case 'password':
      return 'This field is required!';
    case 'emailAddress':
      break;
  }

  return 'Undefined input type!';
}

export default validateInput;
