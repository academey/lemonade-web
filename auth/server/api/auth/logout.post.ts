import axiosInstance from "~/api/request";

export default eventHandler(async (event) => {
  const session = await useAuthSession(event);
  await axiosInstance.delete("/v1/users/logout", {
    headers: {
      "x-auth-token": session.data.token
    }
  });
  await session.clear();
  return {
    message: "Successfully logged out!",
  };
});
