export interface StyleTypes {
  wd?: string;
  hg?: string;
  bg?: string;
  fd?: string;
  pd?: string;
  mg?: string;
  align?: string;
  self?: string;
  justify?: string;
  fs?: string;
  color?: string;
  bold?: boolean;
  textA?: string;
}

export interface FilmTypes {
  img: string;
  title: string;
  description: string;
}

export interface AuthTypes {
  user: UserTypes;
  globalLoading: boolean;
  LogIn: (login: string, password: string) => Promise<void>;
  LogOut: () => void;
  ChangeData: (data: UserTypes) => void;
}
export interface UserTypes {
  name?: string;
  age?: string;
  from?: string;
}
export interface CredentialsValues {
  user: string;
  password: string;
}
