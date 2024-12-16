import React from "react";
import { Table } from "react-bootstrap";

const Todos = ({ todos, deleteTodo, setId }) => {
  return (
    <>
      <Table className="text-center mt-5" variant="dark">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        {todos.map((d) => {
          return (
            <>
              <tbody key={d.id}>
                <tr>
                  <td>{d.title}</td>
                  <td>{d.description}</td>
                  <td>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => setId(d.id)}>
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteTodo(d.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </Table>
    </>
  );
};

export default Todos;
