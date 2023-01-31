import axios from "axios";

const usersAPI = axios.create({
  baseURL: "http://localhost:3000",
});

export const getStudents = async () => {
  const res = await usersAPI.get("/students");
  return res.data;
};

export const getTeachers = async () => {
  const res = await usersAPI.get("/teachers");
  return res.data;
};

export const getSections = async () => {
  const res = await usersAPI.get("/sections");
  return res.data;
};
