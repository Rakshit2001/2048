import React from 'react';
import '../components/GameInstructions.css'

const GameInstructions = () => {
  return (
    <div className="game-instructions-container">
      <h2 className="game-instructions-title">How to Play 2048</h2>
      <p className="game-instructions-paragraph">
        * 2048 is a puzzle game played on a 4x4 grid. The goal is to combine
        matching numbered tiles to create a tile with the value of 2048.
      </p>
      <p className="game-instructions-paragraph">
        * To play the game, you can use the arrow keys or swipe on a touch-enabled
        device to move the tiles in one of the four directions: up, down, left, or
        right. When you swipe or press an arrow key, all the tiles on the grid
        will move in that direction until they hit the edge of the grid or another
        tile.
      </p>
      <p className="game-instructions-paragraph">
        * Tiles with the same value will merge into a new tile with a value that
        is the sum of the two original tiles. For example, two tiles with the
        value of 2 will merge into a single tile with the value of 4. The goal
        is to keep merging tiles and creating larger values until you reach the
        2048 tile.
      </p>
      <p className="game-instructions-paragraph">
        *The game is over when the grid is completely filled with tiles and there
        are no more possible moves. At that point, you can choose to start a new
        game or continue playing to improve your score.
      </p>
      <p className="game-instructions-paragraph">Good luck!</p>
    </div>
  );
};

export default GameInstructions;
