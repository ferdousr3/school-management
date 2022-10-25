interface locationProps {
  state: any;
}

interface State {
  password: string;
  showPassword: boolean;
}

interface IFormInputs {
  name: string;
  email: string;
  password: string;
}
interface IPassReset {
  email: string;
}
interface IContactInputs {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export type { locationProps, IFormInputs, State, IPassReset, IContactInputs };
