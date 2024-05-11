import Link from "next/link";
import React from "react";

const NavbarList = [
  {
    href: "/client",
    title: "Client",
  },
  {
    href: "/query",
    title: "Query",
  },
  {
    href: "/prisma-example",
    title: "Prisma",
  },
  {
    href: "/tasks",
    title: "Tasks",
  },
  {
    href: "/drinks",
    title: "Drinks",
  },
];
const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <li>
          <Link href="/" className="btn btn-primary">
            Next.js
          </Link>
        </li>
        <ul className="menu menu-horizontal md:ml-8">
          {NavbarList.map((link) => {
            return (
              <li key={link.href}>
                <Link href={link.href} className=" capitalize">
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
