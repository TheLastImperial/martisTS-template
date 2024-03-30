export interface IUserLogin {
  email: string;
  password: string;
};

export interface IAuthSlice<U> {
  status: string;
  user: U | null;
  msg: string | null;
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
