export interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export interface UserApiData {
  data: UserData;
}

export interface UserProps {}

export interface UserState {
  users: UserData[];
  currentUserId: number;
}
