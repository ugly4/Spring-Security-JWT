import { $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (name, email, password) => {
  const { data } = await $host.post("project/auth/register", {
    name,
    email,
    password,
  });
  console.log(data.token);
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const login = async (username, password) => {
  const { data } = await $host.post("project/auth/authenticate", {
    username,
    password,
  });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};