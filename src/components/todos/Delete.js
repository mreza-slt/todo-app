import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeAsyncTodos } from "../../feature/todos/TodoSlice";

const DeleteTodo = ({ todoId }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    setLoading(true);
    dispatch(removeAsyncTodos({ id: todoId }));
  };

  return (
    <>
      {loading ? (
        <div className="spinner-border spinner-border-sm ms-2"></div>
      ) : (
        <i onClick={() => handleDelete()} className="bi bi-trash-fill fs-6"></i>
      )}
    </>
  );
};

export default DeleteTodo;
