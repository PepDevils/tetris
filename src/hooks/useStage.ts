import { useState, useEffect } from 'react'
import { IPlayer, TetrisStage, TetrisStageBuilder } from '../game'

// 
export const useStage = (player: IPlayer, resetPlayer: Function) => {
    const builder = new TetrisStageBuilder();
    const defaultStage = builder.buildDefaultStage();
    const [stage, setStage] = useState(defaultStage);

    // const defaultTetrominus = buildTetrominos();
    // const initialState = {
    //     pos: {x: 0, y: 0},
    //     tetromino: randomTetromino(defaultTetrominus).shape,
    //     collided: false
    // }

    useEffect(() =>  {
        const updateStage = (prevStage: TetrisStage) => {
            // first flush the stage
            const newStage = prevStage.map(row => 
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear']: cell))    
            )

            // then draw the tetromino
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if(value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'}`,
                        ]
                    }
                });
            });

            // check collision
            if(player.collided) {
                resetPlayer();
            }


            return newStage;
        }

        setStage(prev => updateStage(prev))
    }, [player, resetPlayer])
    // }, [player, resetPlayer])

    // const [stage, setStage] = useState(defaultStage);

    return [stage, setStage] as const;
}