import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAsyncTodos } from "../../feature/todos/TodoSlice";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(addAsyncTodos({ title }));
    setLoading(false);
  };
  return (
    <>
      <h4>Create Todo :</h4>
      <form onSubmit={(e) => handleSubmit(e)} className="row mt-3">
        <div className="col-md-6">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            placeholder="Todo title ..."
          />
          <div className="form-text text-danger">
            {title ? "" : "Title is required"}
          </div>
        </div>
        <div className="col-auto">
          <button
            type="submit"
            className="btn btn-dark"
            disabled={title === ""}
          >
            Create
            {loading && (
              <div className="spinner-border spinner-border-sm ms-2"></div>
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateTodo;
