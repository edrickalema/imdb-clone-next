import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1 className="mb-8 text-5xl font-bold">Hello, welcome</h1>
      <Link href="/client">
        <button className="btn btn-accent">Get Started</button>
      </Link>
    </div>
  );
};

export default HomePage;
