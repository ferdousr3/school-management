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
interface IBlogInputs {
  title: string;
  description?: string;
  slug?: string;
  image: string;
  source: string;
  author?: string;
  category: string;
  date: string;
}
export type {
  locationProps,
  IFormInputs,
  State,
  IPassReset,
  IContactInputs,
  IBlogInputs,
};
