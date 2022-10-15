import React, { useState, useEffect } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { GrTumblr } from "react-icons/gr";
import Pie from "./Pie";
import "../scss/contenedor.scss";
import frases from "../db.json";

const Contenedor = () => {
  const [color, setColor] = useState(``);
  const [texto, setTexto] = useState({
    quote: "Life isn’t about getting and having, it’s about giving and being",
    autor: "Kevin Kruse",
    id: 2,
  });
  const linkTumbler =
    "https://www.tumblr.com/explore/trending?source=homepage_explore";
  const linkFacebook = "https://www.facebook.com/";

  useEffect(() => {
    setColor(`rgb(155,89,182)`);
  }, []);

  const handleClick = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = `rgb(${`${r},${g},${b}`})`;
    //console.log(color)

    setColor(color);
    //console.log(color)
  };

  const handleClickfrase = (id) => {
    //  console.log(id)
    if (id) {
      let hola = frases.frases.filter((e) => e.id === id);
      // console.log(hola[0]);
      setTexto({
        id: hola[0].id + 1,
        autor: hola[0].author,
        quote: hola[0].quote,
      });
    }
    if (id === 100) {
      setTexto({
        quote:
          "Life isn’t about getting and having, it’s about giving and being",
        autor: "Kevin Kruse",
        id: 2,
      });
    }
  };
  let body = document.querySelector("body");
  body.style.backgroundColor = color;

  return (
    <div>
      <div className="contenedor">
        <div className="frase">
          <p style={{ color: `${color}` }}>{texto.quote}</p>
        </div>

        <div className="autor">
          <span style={{ color: `${color}` }}>- {texto.autor}</span>
        </div>

        <div className="iconos">
          <a
            href={linkTumbler}
            target="_blank"
            rel="noopener noreferrer"
            id="tumbler"
          >
            <span style={{ color: `${color}` }}>{<GrTumblr />}</span>
          </a>
          <a
            href={linkFacebook}
            target="_blank"
            rel="noopener noreferrer"
            id="facebook"
          >
            <span style={{ color: `${color}` }}>{<AiFillFacebook />}</span>
          </a>
          <button
            id="boton"
            onClick={function () {
              handleClick();
              handleClickfrase(texto.id);
            }}
            style={{ color: `white`, backgroundColor: `${color}` }}
          >
            New Quote
          </button>
        </div>
      </div>
      <Pie />
    </div>
  );
};

export default Contenedor;
