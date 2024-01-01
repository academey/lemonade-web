import {User} from "~/auth/server/utils/db";

export interface Post {
  id: string;
  title: string;
  content: string;
  user: User
}