import About from "./containers/About";
import ProjectsSlides from "./containers/ProjectsSlides";
import Skills from "./containers/Skills";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2">
      <section className="w-full h-full md:col-span-2">
        <About />
      </section>
      <section className="w-full h-full">
        <ProjectsSlides />
      </section>
      <section className="w-full h-full">
        <Skills />
      </section>
    </main>
  );
}
