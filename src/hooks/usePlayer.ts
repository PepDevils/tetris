import { IPlayer, IPosition, TetrisStageBuilder } from 'game';
import { useCallback, useState } from 'react'
import { buildTetrominos, randomTetromino } from '../game'


export const usePlayer: () => [IPlayer, Function, Function, Function] = () => {
    const defaultTetrominus = buildTetrominos();
    const initialState = {
        pos: {x: 0, y: 0},
        tetromino: defaultTetrominus['0'].shape,

        // TODO
        //https://www.youtube.com/watch?v=ZGOaCxX8HIU&t=6596s&ab_channel=freeCodeCamp.org
        // 1:36:38

        // quando clico em f5 deveria aparecer sem peça
        // so ao fazer start deveria aparecer uma peça
        // depois nunca mais deveria ficar a peça vazia

        // tetromino: randomTetromino(defaultTetrominus).shape,
        collided: false
    } as IPlayer


    const updatePlayerPos = (position: IPosition, collided: boolean) => {
        const { x, y } = position;
        setPlayer(prev => ({
            ...prev,
            pos: {
                x: (prev.pos.x += x),
                y: (prev.pos.y += y),
                collided,
            }
        }))
    }

    const resetPlayer: ()=> void = useCallback(() => {
        debugger;
        const tetrominus = JSON.parse(JSON.stringify(defaultTetrominus));
        delete tetrominus['0'];

        setPlayer({
            pos: {
                x: TetrisStageBuilder.STAGE_DEFAULT_WIDTH / 2 -2 ,
                y: 0
            },
            tetromino:randomTetromino(tetrominus).shape,
            collided: false
        })
    }, []);

    const rotate = (matrix: any, dir: any) => {
        // swift rows in coluns vice versa (transpose)
        const rotatedTetro = matrix.map((_: any, index: number) => 
        matrix.map((col: any) => col[index]));

        // reverse each row to get a rotated matrix
        if(dir > 0) {
            return rotatedTetro.map((row: any) => row.reverse())
        }
        return rotatedTetro.reverse();

    };

    const playerRotate = (stage: any, dir: any) => {
        const clonePlayer = JSON.parse(JSON.stringify(player));
        clonePlayer.tetromino = rotate(clonePlayer.tetromino, dir);
        console.log(stage);
        
        setPlayer(clonePlayer);
    }

    const [player, setPlayer] = useState(initialState);

    return [player, updatePlayerPos, resetPlayer, playerRotate];
}