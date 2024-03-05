import React from "react";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import Title from "../components/Title";

export default function Skills() {
  return (
    <div className="mt-10 md:mt-0">
      <Title title={"Skills"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 h-full items-center py-10 lg:py-20">
        {skills.map((skill) => (
          <span
            key={skill.id}
            className={`flex flex-col items-center gap-1 font-bold`}
          >
            {skill.icon}
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

const skills = [
  {
    id: 1,
    name: "HTML",
    icon: <FaHtml5 size={60} color="#dd4b25" />,
  },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3Alt size={60} color="#254bdd" />,
  },
  {
    id: 3,
    name: "JAVASCRIPT",
    icon: <IoLogoJavascript size={60} color="#efd81d" />,
  },
  {
    id: 4,
    name: "REACT",
    icon: <FaReact size={60} color="#0e7b9f" />,
  },
  {
    id: 5,
    name: "NEXT.JS",
    icon: <SiNextdotjs size={60} />,
  },
  {
    id: 6,
    name: "TAILWIND",
    icon: <SiTailwindcss size={60} color="#36b7f0" />,
  },
  {
    id: 7,
    name: "GIT",
    icon: <FaGitAlt size={60} color="#e84d31" />,
  },
];
