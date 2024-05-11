"use client";

import React from "react";
import { Toaster } from "react-hot-toast";
const Provider = ({ children }) => {
  return (
    <div>
      <Toaster />
      {children}
    </div>
  );
};

export default Provider;
