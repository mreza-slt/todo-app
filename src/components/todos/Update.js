import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAsyncTodos } from "../../feature/todos/TodoSlice";

const UpdateTodo = ({ todo }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleUpdate = async () => {
    setLoading(true);
    await dispatch(updateAsyncTodos({ todo }));
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <div className="spinner-border spinner-border-sm me-1"></div>
      ) : todo.completed ? (
        <i onClick={() => handleUpdate()} className="bi bi-check-all fs-4"></i>
      ) : (
        <i onClick={() => handleUpdate()} className="bi bi-check fs-4"></i>
      )}
    </>
  );
};

export default UpdateTodo;
