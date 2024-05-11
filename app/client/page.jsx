"use client";
import React, { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="w-full">
      <div className="max-w-lg m-auto text-center grid items-center justify-center">
        <h1 className="text-7xl font-bold mb-4">{count}</h1>

        <div className="flex space-x-3 horizontal">
          <button
            className="btn btn-primary"
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setCount(count - 1)}
          >
            decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
