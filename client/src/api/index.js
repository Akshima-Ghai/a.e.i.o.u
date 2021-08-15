import axios from "axios";

const API = axios.create({ baseURL: "https://a-e-i-o-u-web-app.herokuapp.com/" });
//below function happens on every request
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
  }
  return req;
});
export const fetchEvents = () => API.get("/posts");
export const createEvent = (newEvent) => API.post("/posts", newEvent);
export const updateEvent = (id, updatedEvent) => API.patch(`/posts/${id}`, updatedEvent);
export const deleteEvent = (id) => API.delete(`/posts/${id}`);
export const signin = (formData) => API.post("/user/signin", formData);
export const signup = (formData) => API.post("/user/signup", formData);
