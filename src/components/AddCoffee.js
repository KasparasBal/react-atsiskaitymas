import { useState } from "react";
import "../styles/AddCoffee.css";

const CreateCoffee = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const book = { title, type, image, description };

    const response = await fetch("http://localhost:4000/api/coffee", {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setType("");
      setImage("");
      setDescription("");
      console.log("new Coffee added", json);
    }
  };

  return (
    <>
      <form className="createCoffee" onSubmit={handleSubmit}>
        <h3 className="formTitle">Add A New Coffee</h3>
        <label className="inputLabel">Title</label>
        <input
          className="inputArea"
          id="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label className="inputLabel">Type</label>
        <input
          className="inputArea"
          id="type"
          type="text"
          onChange={(e) => setType(e.target.value)}
          value={type}
        />

        <label className="inputLabel">Image URL</label>
        <input
          className="inputArea"
          id="image"
          type="text"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />

        <label className="inputLabel">Description</label>
        <textarea
          className="inputArea"
          id="description"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className="submit-btn">Add Coffee</button>
        {error && <div className="error">All Input's must be filled!</div>}
      </form>
    </>
  );
};

export default CreateCoffee;
