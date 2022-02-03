import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import {
  addTodo,
  getAllTodos,
  getFilterTodos,
  removeTodo,
  updateTodo,
} from "../../service/crudFunctions";

export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllTodos();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addAsyncTodos = createAsyncThunk(
  "todos/addAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await addTodo({
        id: Date.now(),
        title: payload.title,
        completed: false,
      });
      Swal.fire({
        title: "Task added",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// Does not work on json server, But it works on other global servers//
export const getFilterAsyncTodos = createAsyncThunk(
  "todos/getFilterAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getFilterTodos(payload.number);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const updateAsyncTodos = createAsyncThunk(
  "todos/updateAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await updateTodo(payload.todo.id, {
        title: payload.todo.title,
        completed: !payload.todo.completed,
      });

      Swal.fire({
        title: "Task updated",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeAsyncTodos = createAsyncThunk(
  "todos/removeAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      await removeTodo(payload.id);
      Swal.fire({
        title: "Task deleted",
        icon: "warning",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
      return { id: payload.id };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  todos: [],
  error: null,
};

const TodosSlice = createSlice({
  name: "todos",
  initialState, //key===value
  extraReducers: {
    [getAsyncTodos.fulfilled]: (state, action) => {
      return { ...state, todos: action.payload, error: null };
    },
    [getAsyncTodos.rejected]: (state, action) => {
      return {
        ...state,
        todos: [],
        error: action.payload.message,
      };
    },

    [addAsyncTodos.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
    // Does not work on json server, But it works on other global servers//
    [getFilterAsyncTodos.fulfilled]: (state, action) => {
      state.todos.push = action.payload;
    },

    [updateAsyncTodos.fulfilled]: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: action.payload.completed }
            : todo
        ),
      };
    },

    [removeAsyncTodos.fulfilled]: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload.id);
    },
  },
});

export default TodosSlice.reducer;
