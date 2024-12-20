import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <p className="bg-green-600">TESTING .....</p>
      <Link to="/resume">resume</Link>
      <Link to="resume/basic-info-and-skills">page-1</Link>
      <Link to="resume/education-and-experiences">page-2</Link>
      <Link to="resume/projects-and-interests">page-3</Link>
    </div>
  );
}
