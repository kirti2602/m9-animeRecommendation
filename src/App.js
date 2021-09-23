import React from "react";
import "./styles.css";
import { useState } from "react";

const animeDb = {
  action: [
    {
      name: "One Punch Man",
      rating: "4/5",
      description:
        "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch."
    },
    {
      name: "My Hero Academia",
      rating: "3.5/5",
      description:
        "A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy and learn what it really means to be a hero."
    },
    {
      name: "Hunter X Hunter",
      rating: "3/5",
      description:
        "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks for his father who left him when he was younger."
    }
  ],

  adventure: [
    {
      name: "One Piece",
      rating: "5/5",
      description:
        "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named One Piece."
    },
    {
      name: "Naruto",
      rating: "4.8/5",
      description:
        "Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja."
    },

    {
      name: "Attack on Titan",
      rating: "4.6/5",
      description:
        "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction."
    }
  ],
  thriller: [
    {
      name: "Death Note",
      rating: "4/5",
      description:
        "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it."
    },
    {
      name: "Psycho Pass",
      rating: "3.5/5",
      description:
        "Believing in humanity and order, policewoman Akane Tsunemori obeys the ruling, computerized, precognitive Sibyl System. But when she faces a criminal mastermind who can elude this 'perfect' system, she questions both Sibyl and herself."
    },

    {
      name: "Future Diary",
      rating: "3/5",
      description:
        "A young man competes with people around the world for a chance to become the succesor of God, with a diary that is able to tell the future."
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
              <div> {anime.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
