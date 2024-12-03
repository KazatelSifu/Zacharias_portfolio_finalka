import React, { useState, useEffect } from 'react';

const DynamicTextRectangle = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Kdo jinému jámu, sám do ní si sám sám", "Letí dvě krávy vedle sebe, jedna zabočí vpravo, a té druhé to vůbec nevadí", "Ženy se rozdělují na dva typy: Dobře oblečené, a dobře že jsou oblečené"]; // Tři texty, které se budou měnit

  // Funkce, která mění text každé 3 sekundy
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 8000); // Změna textu každé 3 sekundy

    return () => clearInterval(intervalId); // Čistíme interval při odpojení komponenty
  }, []);

  return (
    <div className="rectangle">
      <p>{texts[currentTextIndex]}</p> {/* Zobrazení aktuálního textu */}
    </div>
  );
};

export default DynamicTextRectangle;