import React, { useEffect, useState } from "react";

const Formlist = ({ todos, setTodos, id, setId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, description);

    if (id) {
      updatebyId(id);
    } else {
      const obj = {
        id: Math.random(),
        title,
        description,
      };

      setTodos([...todos, obj]);
    }
    setId("");
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    if (id) {
      const updatedData = todos.filter((d) => d.id === id);
      setTitle(updatedData[0].title);
      setDescription(updatedData[0].description);
    }
  }, [id]);

  const updatebyId = (id) => {
    const obj = {
      title,
      description,
    };

    setTodos((prevData) =>
      prevData.map((todo) => (todo.id === id ? { ...todo, ...obj } : todo))
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container mt-5 d-flex justify-content-center gap-2">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {id && <button className="btn btn-warning">Edit</button>}
          {!id && <button className="btn btn-warning">Add</button>}
        </div>
      </form>
    </>
  );
};

export default Formlist;
