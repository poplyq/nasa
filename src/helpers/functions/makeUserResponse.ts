import { UserCredential } from 'firebase/auth';
import { IUser } from '../../types/ui/user';

export const makeUserResponse = async (data: UserCredential) => {
  const email: string | null = data.user.email;
  const uid: string = data.user.uid;
  const token = await data.user.getIdTokenResult();
  const accessToken: string = token.token;
  return {
    email,
    uid,
    accessToken,
  } as IUser;
};
