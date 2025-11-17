"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import CpfConsulta from "@/components/stories/CpfConsulta";
import CnpjConsulta from "@/components/stories/CnpjConsulta";
import RgConsulta from "@/components/stories/RgConsulta";
import TelefoneConsulta from "@/components/stories/TelefoneConsulta";
import PlacaConsulta from "@/components/stories/PlacaConsulta";
import NomeConsulta from "@/components/stories/NomeConsulta";
import EmailConsulta from "@/components/stories/EmailConsulta";
import CepConsulta from "@/components/stories/CepConsulta";

export default function Home() {
  const slides = [
    { component: <CpfConsulta />, color: "yellow" },
    { component: <CnpjConsulta />, color: "green" },
    { component: <RgConsulta />, color: "blue" },
    { component: <TelefoneConsulta />, color: "purple" },
    { component: <PlacaConsulta />, color: "orange" },
    { component: <NomeConsulta />, color: "cyan" },
    { component: <EmailConsulta />, color: "pink" },
    { component: <CepConsulta />, color: "red" },
  ];

  return (
    <main className="w-full h-screen bg-black text-white overflow-hidden">
      <Swiper
        direction="horizontal"
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`w-full h-full flex items-center justify-center p-6`}
              style={{
                background: `rgba(0,0,0,0.4)`,
              }}
            >
              <div
                className="w-full max-w-md p-6 rounded-3xl backdrop-blur-lg"
                style={{
                  border: `2px solid ${slide.color}`,
                  boxShadow: `0 0 25px ${slide.color}`,
                  background: `rgba(0,0,0,0.3)`,
                }}
              >
                {slide.component}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}