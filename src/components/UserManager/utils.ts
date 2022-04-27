import { UserData } from "./interface";

export const hasUserAlreadyFetched = (
  users: UserData[],
  currentUserId: number
) => {
  return !!users.filter(user => user.id === currentUserId)[0];
};
