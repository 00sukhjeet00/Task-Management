import { apiCall } from "../utils/apiCall";

class TodoService {
  #header = {
    token: localStorage.getItem("token"),
  };

  getAllTodos = () => {};

  createNewTodo = async (payload: object) => {
    const response = await apiCall("/api/todos", this.#header, payload);
    console.log('response: ', response);
  };
}

export const todoApi = new TodoService();
