import "./styles.css";
import React, { useState } from "react";

//emogi dictionary array
const dataBase = {
  sad: [
    { name: "Bekhayali", movie: "Kabir Singh" },
    { name: "Channa Mereya", movie: "Ae dil hai muskil" },
    { name: "Kabira man ja", movie: "Ye Jawani hai Diwani" }
  ],
  party: [
    { name: "Garmi", movie: "Street Dancer 3" },
    { name: "Apna Time Ayega", movie: "Gully Boy" },
    { name: "Just Chill", movie: "Maine Pyaar Kyun Kiya" }
  ],
  romantic: [
    { name: "Raatan Lambiyan", movie: "Shershah" },
    { name: "Mehbooba", movie: "KGF Chapter 2" },
    { name: "Doobey", movie: "Gehraiyaan" }
  ],
  breakup: [
    { name: "Kahin Toh", movie: "Jaane Tu ya Jane na" },
    { name: "Agar tum saath ho", movie: "Tamasha" },
    { name: "Tujhe Bhula diya", movie: "Anjana anjani" }
  ]
};

export default function App() {
  var [selectGenre, setGenre] = useState("party");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Welcome to my song recommender</h1>
      <p>Welcome to my music recommendation engine</p>

      <div>
        {Object.keys(dataBase).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#d4d4d4",
              borderRadius: "0.2rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {dataBase[selectGenre].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {/* {" "} */}
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div style={{ fontSize: "smaller" }}> {song.movie} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
