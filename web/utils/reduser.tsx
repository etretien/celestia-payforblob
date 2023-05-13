export const initialState = {
  firstName: '',
  surName: '',
  telegramHandle: '',
  email: '',
  password: '',
  confirmPassword: '',
  validatorName: '',
  commissionRate: '',
  validatorWebsite: '',
  validatorDescription: '',
};

export const formReducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case 'firstName':
      return { ...state, firstName: payload };
    case 'surName':
      return { ...state, surName: payload };
    case 'telegramHandle':
      return { ...state, telegramHandle: payload };
    case 'email':
      return { ...state, email: payload };
    case 'password':
      return { ...state, password: payload };
    case 'confirmPassword':
      return { ...state, confirmPassword: payload };
    case 'validatorName':
      return { ...state, validatorName: payload };
    case 'commissionRate':
      return { ...state, commissionRate: payload };
    case 'validatorWebsite':
      return { ...state, validatorWebsite: payload };
    case 'validatorDescription':
      return { ...state, validatorDescription: payload };
    default:
      throw new Error();
  }
};
