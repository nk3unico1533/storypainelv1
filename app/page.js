"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// import dos cards
import CpfConsulta from "@/components/stories/CpfConsulta";
import CnpjConsulta from "@/components/stories/CnpjConsulta";
import RgConsulta from "@/components/stories/RgConsulta";
import TelefoneConsulta from "@/components/stories/TelefoneConsulta";
import PlacaConsulta from "@/components/stories/PlacaConsulta";
import NomeConsulta from "@/components/stories/NomeConsulta";
import EmailConsulta from "@/components/stories/EmailConsulta";
import CepConsulta from "@/components/stories/CepConsulta";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.replace("/login");
  }, [router]);

  return (
    <main className="w-full h-screen bg-black text-white overflow-hidden">
      <Swiper
        direction="vertical"
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        <SwiperSlide><CpfConsulta /></SwiperSlide>
        <SwiperSlide><CnpjConsulta /></SwiperSlide>
        <SwiperSlide><RgConsulta /></SwiperSlide>
        <SwiperSlide><TelefoneConsulta /></SwiperSlide>
        <SwiperSlide><PlacaConsulta /></SwiperSlide>
        <SwiperSlide><NomeConsulta /></SwiperSlide>
        <SwiperSlide><EmailConsulta /></SwiperSlide>
        <SwiperSlide><CepConsulta /></SwiperSlide>
      </Swiper>
    </main>
  );
}