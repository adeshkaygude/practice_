import React, { useState } from "react";

export default function ArrayState() {
  const [moves, setMoves] = useState([
    { color: "blue", count: 0 },
    { color: "red", count: 0 },
    { color: "green", count: 0 },
    { color: "yellow", count: 0 },
  ]);

  const updateColor = (color) => {
    setMoves((prev) =>
      prev.map((move) =>
        move.color === color ? { ...move, count: move.count + 1 } : move,
      ),
    );
  };

  return (
    <div>
      {moves.map((move) => (
        <div key={move.color}>
          <p>
            {move.color} = {move.count}
          </p>

          <button
            onClick={() => updateColor(move.color)}
            style={{
              backgroundColor: move.color,
              color: move.color === "yellow" ? "black" : "white",
              marginBottom: "10px",
            }}
          >
            +1
          </button>
        </div>
      ))}
    </div>
  );
}
