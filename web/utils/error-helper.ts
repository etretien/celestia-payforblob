import { ValidationError } from 'yup';

export const setErrorObj = (e: ValidationError) => {
  const errors: Record<string, string> = {};
  e.inner.forEach(item => {
    if (!errors[`${item.path}Error`]) {
      errors[`${item.path}Error`] = item.errors[0];
    }
  });
  return errors;
};
