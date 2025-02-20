"use client";

import React, { useState } from "react";

const Users = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = async () => {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });

    response = await response.json();

    if (response.success) {
      alert("ok");
    } else {
      alert("not ok");
    }
  };

  return (
    <div className="flex flex-col w-[300px]">
      <input
        type="text"
        placeholder="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="bg-slate-800 text-white p-2 m-2 rounded-xl"
      />
      <input
        type="text"
        placeholder="text"
        onChange={(e) => setAge(e.target.value)}
        className="bg-slate-800 text-white p-2 m-2 rounded-xl"
        value={age}
      />
      <input
        type="text"
        placeholder="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="bg-slate-800 text-white p-2 m-2 rounded-xl"
      />
      <button
        onClick={submitHandler}
        className="bg-slate-400 p-2 m-2 rounded-lg"
      >
        submit
      </button>
    </div>
  );
};

export default Users;
