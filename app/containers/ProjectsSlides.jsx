"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Title from "../components/Title";

const slides = [
  "mockup0.png",
  "mockup1.png",
  "mockup2.png",
  "mockup3.png",
  "mockup4.png",
];

export default function ProjectsSlides() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (slide < slides.length - 1) {
        setSlide(slide + 1);
      } else [setSlide(0)];
    }, 5000);
  }, [slide]);
  return (
    <div>
      <Title title={"Projects"} />
      <Link href="/projects" className="flex justify-center">
        <Image
          src={`/mockup${slide}.png`}
          width={600}
          height={500}
          alt="Projects Slide"
        />
      </Link>
    </div>
  );
}
