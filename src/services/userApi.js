import axios from "axios";

export const fetchUsers = async () => {
  const response = await axios.get("http://localhost:3000/users");
  return response.data;
};

export const fetchUser = async (userEmail, userPassword) => {
  const users = await fetchUsers();

  const user = users.find(
    (user) => user.email === userEmail && user.password === userPassword
  );

  return user;
};

export const getUserbyId = async (userId) => {
  const response = await axios.get(`http://localhost:3000/users/${userId}`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post("http://localhost:3000/users", user);
  return response.data;
};
