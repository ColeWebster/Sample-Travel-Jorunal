import React from "react";
import { FaItunes } from "react-icons/fa";

export default function Header() {
  return (
    <div className="navbar">
      <FaItunes size={70} alt="logo" className="navbar_logo" />
      <h1 className="navbar_header">My Concert Journal</h1>
    </div>
  );
}
