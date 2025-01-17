import axios from "axios";

// base api from spring boot
const API_URL = "http://localhost:8080/api/students";

export const getAllStudents = async () => {
  return axios.get(API_URL);
};

export const getStudentById = async (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const createStudent = async (student) => {
  return axios.post(API_URL, student);
};

export const updateStudent = async (id, student) => {
  return axios.put(`${API_URL}/${id}`, student);
};

export const deleteStudent = async (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
