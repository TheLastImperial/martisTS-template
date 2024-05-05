export interface IUserLogin {
  email: string;
  password: string;
};

export interface IAuthSlice<U> {
  status: string;
  user: U | null;
  msg: string | null;
  emailExists: boolean;
};

export interface IUser {
  name: string;
  email: string;
  uid: string;
};

export interface IInitialState extends IAuthSlice<IUser> {

};

export interface IStartLoginProps {
  user: IUserLogin,
  rememberUser: boolean,
};

export interface IErrorResponse {
  ok: boolean,
  msg: string;
};

export interface INewUser {
  name: string;
  motherLastname: string;
  fatherLastname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface IPasswordStrength {
  label: string;
  value: number;
  color: string;
};
