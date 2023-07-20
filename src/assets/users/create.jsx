import { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "./users";
import uuid from "react-uuid";

function Add() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [gmail, setGmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueID = ids.slice(0, 8);
    let a = name,
      b = gmail,
      c = password;

    users.push({ id: uniqueID, name: a, gmail: b, password: c });
    histroy("/");
  };

  let histroy = useNavigate();
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
export default Add;
