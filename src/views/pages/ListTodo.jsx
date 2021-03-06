import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTodos } from "../../application/selectors/todos";
import { getLoading } from "../../application/selectors/ui";
import { pageLoaded } from "../../application/actions/ui";
import { putTodo } from "../../application/actions/todos";
import { bindActionCreators } from "redux";

const ListTodo = ({ pageLoaded, putTodo, todos, loading }) => {
  useEffect(() => {
    pageLoaded();
  }, [pageLoaded]);

  const handleClicked = (todo) => {
    putTodo(todo);
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          <h1>Essential Todos</h1>
          {loading ? (
            <div className="spinner-border text-success" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div>
              <table className="table table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>Todo</th>
                    <th>Completed</th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map((todo) => (
                    <tr key={todo.id}>
                      <td
                        style={{
                          textDecoration: todo.completed
                            ? "line-through"
                            : "none",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleClicked({
                            ...todo,
                            completed: !todo.completed,
                          })
                        }
                      >
                        {todo.title}
                      </td>
                      <td
                        className={
                          todo.completed ? "btn btn-success btn-block disabled" : "btn btn-danger btn-block disabled"
                        }
                      >
                        {todo.completed.toString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ pageLoaded, putTodo }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    todos: getTodos(state),
    loading: getLoading(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);
