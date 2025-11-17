"use client";

import { useState } from "react";
import StorySlide from "./StorySlide";

const slides = [
  {
    id: 1,
    title: "Consulta CPF",
    type: "cpf",
  },
  {
    id: 2,
    title: "Consulta CNPJ",
    type: "cnpj",
  },
  {
    id: 3,
    title: "Consulta Nome",
    type: "nome",
  },
];

export default function StoryCarousel() {
  return (
    <div className="w-full h-screen overflow-x-auto flex snap-x snap-mandatory no-scrollbar">
      {slides.map((slide) => (
        <StorySlide key={slide.id} title={slide.title} type={slide.type} />
      ))}
    </div>
  );
}
