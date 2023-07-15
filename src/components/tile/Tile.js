import React from "react";

export const Tile = ({ personName, description }) => {
  return (
    <div className="tile-container">
      <p className="tile-title tile">
        {personName}
      </p>
      {Object.values(description).map((value, index) => (
        <p key={index} className="tile">
          {value}
        </p>
      ))}
    </div>
  );
};