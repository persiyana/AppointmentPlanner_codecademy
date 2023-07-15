import React from "react";

import { Tile } from "../tile/Tile";
export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((tile, index) => {
        const {personName, ...description } = tile;
        return <Tile key={index} personName={personName} description={description}/>
    })}
    </div>
  );
};
