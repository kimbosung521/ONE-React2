import { useState } from "react";

export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <div>
        <label>ID : </label>
        <input type="text" />
      </div>
      <div>
        <label>PW : </label>
        <input type="password" />
      </div>
      <div>
        <button type="button">Login</button>
      </div>
    </>
  );
}