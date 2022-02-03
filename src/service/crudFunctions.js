import http from "./httpService";

export const getAllTodos = () => {
  return http.get("/todos");
};
export const getTodoWithId = (id) => {
  return http.get(`/todos/${id}`);
};
export const getFilterTodos = (number) => {
  return http.get(`/todos?_limit=${number}`);
};
export const addTodo = (object) => {
  return http.post("/todos", object);
};
export const updateTodo = (id, object) => {
  return http.put(`/todos/${id}`, object);
};
export const removeTodo = (id) => {
  return http.delete(`/todos/${id}`);
};
