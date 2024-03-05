import Link from "next/link";
import projects from "../utils/data";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full mt-20">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col md:flex-row md:gap-20 lg:gap-32 items-center "
        >
          <Link href={project.ref} target="_blank" className="w-full">
            <Image
              src={project.image}
              width={700}
              height={400}
              alt={project.name}
            />
          </Link>

          <div className="w-full text-center md:text-left">
            <h1>{project.name}</h1>
            {project.hasOwnProperty("designed") ? (
              <p>
                Designed by{" "}
                <span className="text-blue-500">{project.designed}</span>
              </p>
            ) : (
              ""
            )}
            <Link
              href={project.ref}
              target="_blank"
              className="flex justify-center md:justify-start mb-20 md:mb-0"
            >
              <h1 className="px-3 py-2 bg-blue-500/20 dark:bg-blue-500/20 hover:bg-blue-500/40 hover:dark:bg-blue-500/40 w-fit rounded-xl mt-10">
                View Project
              </h1>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
