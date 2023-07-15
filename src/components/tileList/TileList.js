import React from "react";

import { Tile } from "../tile/Tile";
export const TileList = ({ contacts }) => {
  return (
    <div>
      {contacts.map((tile, index) => {
        const {personName, ...description } = tile;
        return <Tile key={index} personName={personName} description={description}/>
    })}
    </div>
  );
};
