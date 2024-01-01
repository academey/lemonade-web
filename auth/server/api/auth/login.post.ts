import axiosInstance from "~/api/request";
import type {User} from "~/auth/server/utils/db";
import type {AxiosResponseHeaders} from "axios";

export default eventHandler(async (event) => {
  const session = await useAuthSession(event);
  const { email, password } = await readBody(event);

  console.log("email is ", email, password);
  let signInResult = await axiosInstance.get("/v1/users/sign-in", {
    auth: {
      username: email,
      password: password
    }
  });
  const user = signInResult.data.data as User;
  let xAuthToken = (signInResult.headers as AxiosResponseHeaders).get("x-auth-token")?.toString();

  if (!user) {
    throw createError({
      message: "Email not found! Please register.",
      statusCode: 401,
    });
  }
  await session.update({
      id: user.id,
      name: user.name,
      email: user.email,
      token: xAuthToken,
  });

  return session;
});
