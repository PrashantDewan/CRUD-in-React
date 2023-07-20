import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "./users";

function Edit() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useNavigate();

  // Find the user index based on the matching id
  const index = users.findIndex((user) => user.id === id);

  //   var index = users
  //     .map(function (e) {
  //       return e.id;
  //     })
  //     .indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (index !== -1) {
      let a = users[index];
      a.name = name;
      a.gmail = gmail;
      a.password = password;

      history("/");
    } else {
      console.log("User not found!"); // Handle the case where the user is not found
    }
  };
  useEffect(() => {
    setId(localStorage.getItem("id")); // Set the id state from localStorage
    setName(localStorage.getItem("name"));
    setGmail(localStorage.getItem("gmail"));
    setPassword(localStorage.getItem("password"));
  }, []);

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            required
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default Edit;
