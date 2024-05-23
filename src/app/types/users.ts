import { Post } from 'src/API';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  posts: Post[];
  friends: string[];
  friendRequests: string[];
  photoUrl: string;
  id: string;
  __typename: string;
};
