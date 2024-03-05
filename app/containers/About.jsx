import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row md:justify-center items-center py-[50px] gap-2 md:gap-5">
      <Image
        src={"/bruno.png"}
        width={250}
        height={250}
        alt="Bruno Neves"
        className="rounded-[50%] bg-blue-500/20 dark:bg-blue-500/20"
      />
      <div className="space-y-5 text-center md:text-left">
        <h1>
          Bruno <span className="text-blue-500">Neves</span>
        </h1>
        <h1>
          <span className="text-blue-500">Web</span> Developer
        </h1>
        <div className="flex justify-center md:justify-start gap-5">
          <Link
            href={"https://www.linkedin.com/in/bruno-neves-25bb29187/"}
            target="_blank"
          >
            <FaLinkedin size={35} className="hover:text-blue-500" />
          </Link>
          <Link href={"https://github.com/BrunoNeves214"} target="_blank">
            <FaGithub size={35} className="hover:text-blue-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}
