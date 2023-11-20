import Image from "next/image";
import { Inter } from "next/font/google";
import useTranslate from "@/hooks/useTranslate";
import { getDictionary } from "../../get-dictionary";
import { Button } from "@/shared/components";
import { SvgMaker } from "../../SvgMaker";
import { useEffect, useState } from "react";

export default function Svg({ dictionary }) {
  const [svgSprite, setSvgSprite] = useState(null);

  useEffect(() => {
    fetch("/images/sprite.svg")
      .then((response) => response.text())
      .then((data) => {
        setSvgSprite({ __html: data });
      });
  }, []);

  useEffect(() => {
    const svgSpriteSvgs = document.querySelector("div");
    const svgContainer = document.querySelector("#svg-container");

    // Get all symbols from SVG sprite
    const symbols = Array.from(svgSpriteSvgs.querySelectorAll("symbol"));

    // Extract IDs and append SVGs to container
    symbols.forEach((symbol) => {
      const id = symbol.id;
      const div = document.createElement("div");
      div.style.display = "flex";
      div.style.flexDirection = "column";
      div.style.alignItems = "center";

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
      const p = document.createElement("p");

      // Set identifier for 'use' element
      use.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        `#${id}`,
      );

      // Assign SVG ID as text content of 'p' element
      p.textContent = id;

      // Add 'use' to 'svg', and 'svg' and 'p' to 'div'
      svg.appendChild(use);
      div.appendChild(svg);
      div.appendChild(p);

      // Append 'div' to SVG container
      svgContainer.appendChild(div);
    });
  }, [svgSprite]);

  return (
    <section className="">
      <div dangerouslySetInnerHTML={svgSprite} />

      <div className="grid grid-cols-4 gap-x-rem-5" id="svg-container"></div>
    </section>
  );
}

export const getServerSideProps = async (context) => {
  const { locale } = context;
  const dictionary = await getDictionary(locale);

  return {
    props: {
      dictionary,
    },
  };
};
