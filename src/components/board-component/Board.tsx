import React, { Component, useState } from 'react';
import './Board.scss';


import { Stage, Display, Button } from 'components';
import { TetrisStage, TetrisStageBuilder } from 'game';

import { usePlayer, useStage } from 'hooks';
// import { usePlayer, useStage } from '../../hooks';



const Board = () => {


  const tetrisStageBuilder = new TetrisStageBuilder();

  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(null);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  console.log('re-render');

  
  const movePlayer = (direction: any) => {
    if(!tetrisStageBuilder.checkCollision(player, stage, {x: direction, y:0})) {
      updatePlayerPos({x: direction, y: 0})
    }
  }

  const startGame = () => {
    const tetrisStage: TetrisStage = tetrisStageBuilder.buildDefaultStage();
    setStage(tetrisStage);
    resetPlayer();
  }

  const drop = () => {

    if(!tetrisStageBuilder.checkCollision(player, stage, {x: 0, y: 1})) {
      updatePlayerPos({
        x: 0, y: 1, collided: false
      })
    } else {

      if(player.pos.y < 1) {

      } else {

      }

      updatePlayerPos({
        x: 0, y: 0, collided: true
      })
    }

  }

  const dropPlayer = () => {
    drop();
  }

  const move = (event: React.KeyboardEvent) => {
    const {keyCode} = event;
    if(!gameOver) {
      if(keyCode === 37) {
        // left arrow
        movePlayer(-1)
      } 
      else if(keyCode === 39) {
        // right arrow
        movePlayer(1)
      } else if(keyCode === 40) {
        // down arrow
        dropPlayer();
      } else if(keyCode === 38) {
        playerRotate(stage, 1)
      }
    }
  }

  return (
    <div className="board-wrapper" role="button" tabIndex={0} onKeyDown={(e: React.KeyboardEvent) => move(e)}>
      <div className="board">
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver="gameOver" text="Game Over"></Display>) :
            (
            <div>
            <Display text="Score"></Display>
            <Display text="Rows"></Display>
            <Display text="Level"></Display>
          </div>
            )}
          <Button callback={startGame} >
          </Button>
        </aside> 
      </div>
    </div>
);

}

export { Board };