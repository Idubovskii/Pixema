export interface IBaseActionType {
  type: string;
}
export interface IObjectStringList {
  [key: string]: string[];
}

export interface ITokenDto {
  access: string;
  refresh: string;
}

export interface IUserType {
  username: string;
  email: string;
  id: number;
}
