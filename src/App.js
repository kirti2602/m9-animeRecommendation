import React from "react";
import "./styles.css";
import { useState } from "react";

const animeDb = {
  action: [
    { name: "One Punch Man", rating: "4/5" },
    { name: "My Hero Academia", rating: "3.5/5" }
  ],

  adventure: [
    {
      name: "One Piece",
      rating: "5/5"
    },
    {
      name: "Naruto",
      rating: "4.8/5"
    }
  ],
  thriller: [
    {
      name: "Death Note",
      rating: "4/5"
    },
    {
      name: "Psycho Pass",
      rating: "3/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("thriller");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Checkout my favorite animes. Select a genre to get started{" "}
      </p>
      <div>
        {/* {btn-action} */}
        <button
          className
          onClick={() => genreClickHandler("action")}
          style={{
            cursor: "pointer",
            background: "#343a40",
            borderRadius: "0.5rem",
            padding: "0.5rem  2rem",
            border: "1px solid white",
            margin: "1rem 0.3rem",
            color: "white",
            fontFamily: "Raleway"
          }}
        >
          action
        </button>

        {/* btn-adventure */}
        <button
          className
          onClick={() => genreClickHandler("adventure")}
          style={{
            cursor: "pointer",
            background: "#0d6efd",
            borderRadius: "0.5rem",
            padding: "0.5rem  1rem",
            border: "1px solid white ",
            margin: "1rem 0.3rem",
            color: "white",
            fontFamily: "Raleway"
          }}
        >
          adventure
        </button>

        {/* btn-thriller */}

        <button
          className
          onClick={() => genreClickHandler("thriller")}
          style={{
            cursor: "pointer",
            background: "#ffc107",
            borderRadius: "0.5rem",
            padding: "0.5rem  2rem",
            border: "1px solid white ",
            margin: "1rem 0.3rem",
            color: "black",
            fontFamily: "Raleway"
          }}
        >
          thriller
        </button>
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {animeDb[selectedGenre].map((anime) => (
            <li
              key={anime.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1.5px solid #ff4848",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                {" "}
                {anime.name}{" "}
              </div>
              <div
                style={{
                  fontSize: "1.3rem",
                  color: "#290FBA",
                  fontWeight: "bold"
                }}
              >
                {" "}
                {anime.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
