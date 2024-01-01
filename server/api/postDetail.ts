import axiosInstance from "~/api/request";
import type {User} from "~/auth/server/utils/db";
import {Post} from "~/server/model/post";

interface Query {
  postId: number;
}
export default eventHandler(async (event) => {
  const query: Query= getQuery(event)
  let postListResult = await axiosInstance.get(`/v1/posts/${query.postId}`);

  const {data: post } = postListResult.data;
  return {
    post
  };
});
