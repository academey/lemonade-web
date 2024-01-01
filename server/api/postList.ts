import axiosInstance from "~/api/request";
import type {User} from "~/auth/server/utils/db";
import {Post} from "~/server/model/post";

interface Query {
  page: number;
  pageCount: number;
}
export default eventHandler(async (event) => {
  const query: Query= getQuery(event)
  let postListResult = await axiosInstance.get("/v1/posts", {
    params: {
      page: query.page - 1,
      size: query.pageCount,
    },
  });

  const {data: postList, totalCount } = postListResult.data;
  return {
    postList,
    totalCount
  };
});
