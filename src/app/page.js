import Card from "@/components/Card";
import CardLogo from "@/components/CardLogo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import { Section, SectionWithComment } from "@/components/Section";
import React from "react";

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6,
];

export default function Home() {
  return (
    <div className="flex-1 scroll-mx-0">
      <div className="container bg-cover bg-center bg-[url('/night.jpg')] cover  min-h-screen">
        <Nav />
        <Hero />
      </div>
      <p className="text-3xl pl-36 pt-20 font-extrabold">
        You will get all these
      </p>
      <div className="flex flex-row gap-16 p-10  justify-center">
        <Card title={"Worksheet"} />
        <Card title={"Notes"} />
        <Card title={"Cats"} />
      </div>
      <Section />
      <div className="flex-1 px-36 pt-36 ">
        <p className="text-3xl  font-extrabold ">
          Students from the best schools are using PrepX
        </p>
        <div className="flex flex-wrap mt-10 gap-5">
          {data.map(() => (
            <CardLogo url={"/school-1.jpg"} />
          ))}
        </div>
      </div>

      <SectionWithComment />
      <Footer />
    </div>
  );
}
