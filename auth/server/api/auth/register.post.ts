import axios from 'axios';
import axiosInstance from "~/api/request";

export default eventHandler(async (event) => {
  const { email, name, password } = await readBody(event);
    let signUpResult = await axiosInstance.post("/v1/users/sign-up", {
        email,
        name,
        picture: null,
        password
    });
    console.log("signUpResult", signUpResult.data);
  return {
    message: "Successfully registered!",
  };
});
