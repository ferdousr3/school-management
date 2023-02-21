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

interface FormInputProps {
  name: string;
  control: any;
  label: string;
  setValue?: any;
  defaultValue?: string | null | undefined;
}
interface IEventInputs {
  name: string;
  place?: string;
  time?: string;
  date: string;
  organizer: string;
}
export type {
  locationProps,
  IFormInputs,
  State,
  IPassReset,
  IContactInputs,
  IBlogInputs,
  FormInputProps,
  IEventInputs,
};
/**
 * blog data interface
 */
export interface BData {
  status?: string;
  data: {
    total?: number;
    page?: string | null;
    blogs: {
      title?: string;
      description?: string;
      author?: string;
      category?: string;
      date?: string;
      image?: string;
      slug?: string;
      source?: string;
      status?: string;
    }[];
  };
}
/**
 * event data interface
 */

export interface EData {
  status?: string;
  data: {
    total?: number;
    page?: string | null;
    events: {
      name?: string;
      organizer?: string;
      place?: string;
      status?: string;
      time?: string;
      date?: string;
    }[];
  };
}
