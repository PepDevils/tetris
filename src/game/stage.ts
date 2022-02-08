// export const STAGE_WIDTH = 12;
// export const STAGE_HEIGHT = 20;

// export const buildStage: (h: number, v: number) => any[][] = (h: number, w: number) => {
//     return Array.from(Array(h), () => 
//         new Array(w).fill([0, 'clear'])
//     )
// }

// export const buildDefaultStage: () => any[][] = () => {
//     return buildStage(STAGE_HEIGHT, STAGE_WIDTH)
// }

// TODO use me instead

// TODO use me instead

export type TetrisStage = any[][];

export class TetrisStageBuilder {
    static CLEAR = 'clear'
    static STAGE_DEFAULT_WIDTH = 12;
    static STAGE_DEFAULT_HEIGHT = 20;

    constructor() {

    }

    public buildStage: (h: number, v: number) => TetrisStage = (h: number, w: number) => {
        return Array.from(Array(h), () => 
            new Array(w).fill([0, TetrisStageBuilder.CLEAR])
        )
    }

    public buildDefaultStage: () => TetrisStage = () => {
        return this.buildStage(TetrisStageBuilder.STAGE_DEFAULT_HEIGHT,
            TetrisStageBuilder.STAGE_DEFAULT_WIDTH)
    }

    // TODO
    public checkCollision(player: any, stage: any, {x: moveX, y: moveY}: any): boolean {
        for (let y = 0; y < player.tetromino.length; y++) {
            for (let x = 0; x < player.tetromino[y].length; x++) {
                const element = player.tetromino[y][x];

                //  1 - Check that were on an actual tetromino cell
                if(element !== 0) {

                    if(
                    //  1 - Check that our move is inside the game areas height (y)
                    // we shouldn´t go through the bottom of the play area
                    !stage[y + player.pos.y + moveY] || 
                    
                    // 3 - check that our move is inside the game areas width (x)
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] || 

                    // 4 - Check that the cell were e moving to isnt set to clear
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== TetrisStageBuilder.CLEAR
                    ) {
                        return true;
                    }


                }
                
            }
            
        }
        return false
    }
}
