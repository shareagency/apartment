/// <reference types="vite/client" />

import React from "react";

import Header from "./components/Header";
import DescriptionBlock from "./components/DescriptionBlock";
import GalleryCarousel from "./components/GalleryCarousel";
import CtaButton from "./components/CtaButton";
import ContractLink from "./components/ContractLink";

// Динамический импорт всех картинок из public/images
// Добавляем as string[] чтобы TypeScript понял, что это массив строк
const imageModules = import.meta.glob("/public/images/*.jpg", {
  eager: true,
  as: "url",
}) as Record<string, string>;
const images: string[] = Object.values(imageModules);

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header title="Современная квартира для ваших удобств" />

      <GalleryCarousel images={images} />

      <DescriptionBlock />

      <div className="flex flex-col items-center gap-4 px-4 py-8 max-w-4xl mx-auto">
        <CtaButton href="/apply-form" />
        <ContractLink href="/doc/doc.pdf" />
      </div>
    </div>
  );
};

App.displayName = "App";

export default App;
